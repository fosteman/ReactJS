import React, { Component } from 'react';
import Pusher from 'pusher-js/node';
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

  componentDidMount() {
    const webHook = new Pusher({
      appId: '844095',
      key: '51d0a549a44a111627f4',
      secret: '752e1f606c09044ecd97',
      cluster: 'us2',
      encrypted: true
    });

    const channel = webHook.subscribe('bot');
    channel.bind('bot-response', data => {
        const msg = {
          data: {
            text: data.message,
          },
          author: 'DialogFlow',
          type: 'text'
        };
      this.setState({conversation: [...this.state.conversation, msg]});
    });
  }

  handleSubmit = messageObject => {
    if (!messageObject.data.text.trim()) console.log('Empty message!');

    const msg = {
      data: { text: messageObject.data.text },
      author: 'human',
      type: 'text'
    };

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
            agentProfile={{teamName: "Fosteman's DialogFlow Chatbot"}}
            onMessageWasSent={this.handleSubmit}
            messageList={this.state.conversation}
          />
    );
  }
}

export default App;
