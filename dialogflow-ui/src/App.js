import React from 'react';
import {Launcher} from 'react-chat-window';

const keyFilename = process.env.DF_SERVICE_ACCOUNT_PATH;
const { SessionsClient } = require('dialogflow');

const dialogflowClient = new SessionsClient({
  credentials: {
    private_key: process.env.DF_PRIV_KEY,
    client_email: process.env.DF_CLIENT_EMAIL
  },
  projectId: process.env.DF_PROJECT_ID
});
const projectId = process.env.DF_PROJECT_ID;


export default function App() {
  const handleSubmit = messageObject => {
    messageObject.author = 'User';
    this.setState({
      conversation: [...this.state.conversation, messageObject],
    });
  };
  return (
        <Launcher
            isOpen={true}
            agentProfile={{teamName: "Fosteman's DialogFlow Chatbot"}}
            onMessageWasSent={this.handleSubmit}
            messageList={this.state.conversation}
        />
  );
}
