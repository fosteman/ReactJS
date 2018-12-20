import React from 'react';
import uuid from 'uuid';
/*function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const subscribe = (listener) => (
    listeners.push(listener)
  );

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  return {
    subscribe,
    getState,
    dispatch,
  };
}*/
import {createStore} from 'redux';

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
      const newMessage = {
          text: action.text,
          timestamp: Date.now(),
          id: uuid.v4(),
      };
      const threadIndex = state.threads.findIndex((thread) => thread.id === action.threadID);
      const oldThread = state.threads [threadIndex];
      /*const newThread = { ES7
          ...oldThread,
          messages: oldThread.messages.concat(newMessage)
      };*/
      const newThread = Object.assign({}, oldThread, {messages: oldThread.messages.concat(newMessage)}); //<=ES6


    return {
        ...state,
        threads: [
            ...state.threads.slice(0, threadIndex),
            newThread,
            ...state.threads.slice(threadIndex + 1, threadIndex.length),
        ],
    };
  }
  else if (action.type === 'DELETE_MESSAGE') {
      const threadIndex = state.threads.findIndex(
          (thread) => thread.messages.find(
              (msg) => (msg.id === action.id)
          )
      );
      const oldThread = state.threads[threadIndex];
      const newThread = {
          ...oldThread,
          messages: oldThread.messages.filter((msg) => (msg.id !== action.id)),
      };

    return {
        ...state,
        thread: [
            ...state.threads.slice(0, threadIndex),
            newThread,
            ...state.threads.slice(threadIndex + 1, state.threads.length),
        ]
    };
  } else {
    return state;
  }
}

const initialState_ = { threads: [{
        messages:
            [{
                text: '',
                timestamp: 0,
                id: '0',
            }],
        id: 'threadID',
        title: 'Thread title', }]};
const initialState = {
    activeThreadID: '1',
    threads: [
        {
            id: '1', //thread ID
            title: 'Thread title',
            messages:
            [
                {
                    text: 'Twelve minutes to ignition. Chat ID:1',
                    timestamp: Date.now(),
                    id: uuid.v4(),
                }
            ],
        },
        {
            id: '2',
            title: 'Thread ID: 2 title',
            messages: [
                {
                    text: 'Read you loud and clear Watson,' +
                    'Eleven minutes to ignition. Chat ID:2',
                    timestamp: Date.now(),
                    id: uuid.v4(),
                }
            ],
        }
        ],
};

const store = createStore(reducer, initialState);

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
      const state = store.getState();
      const activeThreadID = state.activeThreadID;
      const threads = state.threads;
      const activeThread = threads.find((thread) => thread.id === activeThreadID);

      const tabs = threads.map((thread) => ({
                  title: thread.title,
                  active: thread.id === activeThreadID, //boolean
          }));
    return (
      <div className='ui segment'>
          <ThreadTabs tabs={tabs} />
          <Thread thread={activeThread} />
      </div>
    );
  }
}
class ThreadTabs extends React.Component {
    render() {
        const tabs = this.props.tabs.map((tab, index) => (
            <div className={tab.active ? 'active item' : 'item'} key={index}>{tab.title}</div>
        ));
        return(
            <div className='ui tio attached tabular menu'>{tabs}</div>
        );

    }
}
class MessageInput extends React.Component {
  state = {
    value: '',
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  };

  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      text: this.state.value,
        threadID: this.props.threadID,
    });

    this.setState({
      value: '',
    });
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
          Submit
        </button>
       </div>
    );
  }
}
class Thread extends React.Component {
  handleClick = (id) => {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      id: id,
        threadID: this.props.threadID,
    });
  };

  render() {
    const messages = this.props.thread.messages.map((message, index) => (
      <div
        className='comment'
        key={index}
        onClick={() => this.handleClick(message.id)}
      ><div className='text'>{message.text}<span className='metadata'>@{message.timestamp}</span>
      </div>
      </div>
    ));
    return (
      <div className='ui center aligned basic segment'>
        <div className='ui comments'>
          {messages}
        </div>
          <MessageInput threadID={this.props.thread.id} />
      </div>
    );
  }
}

export default App;
