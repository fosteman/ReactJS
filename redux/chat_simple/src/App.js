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
        return {messages: state.messages.concat(action.message)};
    else if (action.type === 'DELETE_MESSAGE')
        return {
            messages: [
                ...state.messages.slice(0, action.index),
                ...state.messages.slice(action.index + 1, state.messages.length)
            ]
        };
}
const store = createStore(reducer ,{
    messages: [
        'init',
    ]
});
const listener = () => { console.log('Current state: '); console.log(store.getState());
};
store.subscribe(listener);
const addmsgact1 = {
    type: 'ADD_MESSAGE',
    message: '1'
};
store.dispatch(addmsgact1);
const addMessageAction2 = {
    type: 'ADD_MESSAGE',
    message: 'I read you loud and clear, Houston.',
};
store.dispatch(addMessageAction2);
// -> `listener()` is called
const deleteMessageAction = { type: 'DELETE_MESSAGE', index: 0,
};
store.dispatch(deleteMessageAction);
