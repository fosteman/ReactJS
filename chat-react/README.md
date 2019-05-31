# Chat React Walk-through

This walk-through will encompass creation of a simple chat-box using React and stateful components.

## Concepts to Learn

- React Core Stateful \ Stateless \ Functional - components
- Bi-Directional Data Flow via event propagation
- ReactDOM: JSX and the VirtualDOM
- `props` parameter, `state` storage, `children` property
## Dependencies

Styling is done with [Semantic-UI](https://semantic-ui.com). 
To install:
```bash
npm install gulp@3.9.1 semantic-ui
cd semantic/
gulp build
```
Running the gulp build tools will compile CSS and Javascript for use in your project.

Then, include built distributive, jQuery into `index.html`
```html
<link rel="stylesheet" type="text/css" href="../semantic/dist/semantic.min.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="semantic/dist/semantic.min.js"></script>
```
            
## Running the app

In the project directory, you can run:
`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
#### `src/` 

Holds our components
- `App`
- `MessageView`
- `MessageInput`

#### `MessageView.js` 

Beginning with this functional (stateless) component will allow us to see architecture beforehand. 
```jsx harmony
import React from "react";

export const MessageView = props => {
    //create scoped variable
    const messages = props.messages.map((message, index) => (
        <div
            className='ui message'
            key={index}
        >
            {message}
        </div>
    ));
    // resolve scoped `messages`
    return (
        <div className='ui comments'>
            {messages}
        </div>
    );
};
```
Now we can render messages onto the page by passing them as a property into this component. 
#### `MessageInput.js` 

Next up, let's setup stateful input box, that will handle typed message and push it upstream the component tree to it's parent `App`. 
```jsx harmony
import React from "react";

export class MessageInput extends React.Component {
    state = {
        value: '',
    };
    // keeps Input field in sync, re-rendered
    onChange = e => {
        this.setState({
            value: e.target.value,
        })
    };
    // Handles submitted message to components parent via propagation
    handleSubmit = () => {
        this.props.upStreamMessage(this.state.value);
    };

    render() {
        return (
            <div className='ui input'>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'
                />
                <button
                    onClick={this.handleSubmit}
                    className='ui primary button'
                    type='submit'
                >
                    Send
                </button>
            </div>
        );
    }
}
``` 
It is important to mention, that we are watching `<input/>` 's value, re-rendering the element, whenever change happens. Without `onChange` event-handler, input field would be immutable. 

Submitting a message will be handled by local handler (delegator) function `handleSubmit`, which passes the message to parent's delegated `upStreamMessage`, available to us via `props`.
#### `App.js`

Now, that initial children are settled on the bottom of the hierarchy (think pyramid foundation), `App` component can be built.

 `App`  stores all messages in it's `state`. It passes them as an <em>attribute-property</em> `messages={this.state.messages}` in `MessageView` component to render. 
 
 Meanwhile all submitted messages will reach `upStreamMessage` method which finally handles storage of them in `this.state`. 
 
 Note, that whenever `this.state` changes, all underlying (pyramid foundation) components will be re-rendered accordingly, for data flows downwards by design, to the contrary of manually propagating (upStreaming) the data via handlers.
```jsx harmony
export default class App extends React.Component {
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
  // Implement render method
  render() {
    return (
        <div className='ui segment'>
          <MessageView messages={this.state.messages} />
          <MessageInput upStreamMessage={this.upStreamMessage} />
        </div>
    );
  }
}
```
The app is now running, although any state will be lost with page refresh.
 
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
