import React from 'react';
import { MessageView } from './MessageView';
import { MessageInput } from './MessageInput.js';

class App extends React.Component {
  constructor(props) {
    // Initializes superclass
    super(props);
    // Create message store
    this.state = {
      messages: [],
    };
  }
  // store new message
  upStreamMessage = (message) => {
    // Take local copy, mutate, and then setState
    const newMessageArray = this.state.messages.push(message);
    this.setState({
      message: newMessageArray
    });
  };
  render() {
    return (
        <div className='ui segment'>
          <MessageView messages={this.state.messages} />
          <MessageInput upStreamMessage={this.upStreamMessage} />
        </div>
    );
  }
}

export default App;
