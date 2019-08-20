import React from 'react';
import {Launcher} from 'react-chat-window';
import dialogflow from 'dialogflow';
import uuid from 'uuid';
import env from './env';

const private_key = env.REACT_APP_DF_PRIVATE_TOKEN;
const client_email = env.REACT_APP_DF_CLIENT_EMAIL;
const projectId = env.REACT_APP_DF_PROJECT_ID;

export default function App() {
  const [conversation, newMessage] = React.useState([]);
  /**
   * @desc: Send a query to the dialogflow agent, and return query result.
   * @param {string} projectId The project to be used
   * @param {object} queryObject coming from chatbox.
   */
  async function handleSubmit(queryObject) {
    newMessage([...conversation, queryObject]);

    const queryText = queryObject.data.text;

    if (!projectId || !private_key) return console.error('Dialogflow variables not found in .env file!');

    // Create a unique identifier for the session
    const sessionId = uuid.v4();
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient(
        {
          credentials: {
            private_key,
            client_email
          },
        }
    );
    //define session path
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: queryText,
          // The language used by the client
          languageCode: 'en-US',
        },
      },
    };
    try {
      let responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult;
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
      } else {
        console.log(`  No intent matched.`);
      }
      return responses
    } catch (err) {
      console.error('DialogFlow.sendTextMessageToDialogFlow ERROR:', err);
      throw err
    }
    // Send request and log result
    // Get query result
  }

  return (
        <Launcher
            isOpen={true}
            agentProfile={{teamName: "Fosteman's Dialog Flow Bot"}}
            onMessageWasSent={handleSubmit}
            messageList={conversation}
        />
  );
}
