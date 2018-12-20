import React from 'react';
function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];
    const subscribe = (listener) => {
      listeners.push(listener);
    };

    const getState = () => (state);

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(subscriber => subscriber());
    };
    return {
        subscribe,
        getState,
        dispatch,
    };
}
function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE')
        return { messages: state.messages.concat(action.message) };
    else if (action.type === 'DELETE_MESSAGE')
        return {
            messages: [
                ...state.messages.slice(0, action.index),
                ...state.messages.slice(action.index + 1, state.messages.length)
            ]
        };
}
const ReduxStore = createStore( reducer ,{messages: ['init']} );

class App extends React.Component {
    componentDidMount() { //changes in state will be re-rendered.
        ReduxStore.subscribe(() => this.forceUpdate());
    }
    render() {
        const messages = ReduxStore.getState().messages;
        return (
            <div className='ui segment'>
                <MessageView messages={messages} />
                <MessageInput />
            </div>
        );
    }
}
class MessageInput extends React.Component {
    state = { inputValue: ''};
    onChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    };
    handleSubmit = () => {
        ReduxStore.dispatch({type: 'ADD_MESSAGE', message: this.state.inputValue,});
        this.setState({inputValue: ''});
    };
    render() {
        return (
            <div className='ui input'>
                <input value={this.state.inputValue} onChange={this.onChange} type='text' placeholder='Your message' />
                <button onClick={this.handleSubmit} className='button ui primary' type='submit'>Send message</button>
            </div>
        );
    }
}
class MessageView extends React.Component {
    handleClick = (index) => {
        ReduxStore.dispatch({index: index, type:'DELETE_MESSAGE'});
    };
    render() {
        const messages = this.props.messages.map((msg, index) => (<div className='comment' key={index} onClick={this.handleClick(index)}> {msg} </div>));
        return (<div className='ui comments'>{messages}</div>);
    }
}
export default App;