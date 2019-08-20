import React from 'react';
import {Launcher} from 'react-chat-window';
import dialogflow from 'dialogflow';
import uuid from 'uuid';
require('dotenv').config({path :'.env'});

export default function App() {
  const [conversation, newMessage] = React.useState([]);
  /**
   * @desc: Send a query to the dialogflow agent, and return query result.
   * @param {string} projectId The project to be used
   * @param {object} queryObject coming from chatbox.
   */
  async function handleSubmit(queryObject) {
    newMessage([...conversation, queryObject]);

    const private_key = process.env.DF_PRIV_KEY;
    const client_email = process.env.DF_CLIENT_EMAIL;
    const projectId = process.env.DF_PROJECT_ID;

    const queryText = queryObject.data.text;
    console.log(projectId, ' : ',queryText);

    if (!projectId) return console.error('Dialogflow projectId not found in .env file!');

    // Create a unique identifier for the session
    const sessionId = uuid.v4();
    // Create a new session
    const sessionsClient = new dialogflow.SessionsClient(
        {
          credentials: {
            private_key
            client_email
          },
        }
    );
    const sessionPath = sessionsClient.sessionPath(projectId, sessionId);

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

    // Send request and log result
    const responses = await sessionPath.detectIntent(request);
    console.log("Detected intent. Here's response:", responses);
    // Get query result
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
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
