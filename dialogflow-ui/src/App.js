import React from 'react';
import axios from 'axios';
import {Launcher} from 'react-chat-window';


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
