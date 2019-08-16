import React, { Component } from 'react';
import axios from 'axios';
import {Launcher} from 'react-chat-window';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {}

  handleSubmit = messageObject => {
    messageObject.author = 'User';

    this.setState({
      conversation: [...this.state.conversation, messageObject],
    });

    axios('http://localhost:3010/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messageText: messageObject.data.text
      }),
    });

  };

  render() {
    return (
          <Launcher
              isOpen={true}
              agentProfile={{teamName: "Fosteman's DialogFlow Chatbot"}}
              onMessageWasSent={this.handleSubmit}
              messageList={this.state.conversation}
          />
    );
  }
}

export default App;
