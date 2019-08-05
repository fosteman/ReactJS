const Redux = require('redux');
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const SHUT_WINDOWS = 'SHUT_WINDOWS';


//sample actions
const shutAllWindows = {
    type: SHUT_WINDOWS,
    reason: 'Time to watch a documentary',
    windows: [0, 1]
};



function reducer(state, action) {
    switch(action.type) {
        case TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE : {
            return applyToggleTodo(state, action);
        }
        case SHUT_WINDOWS: {
            return applyShutWindows(state, action);
        }
        default : return state;
    }
}

/*Action creators*/
function doAddTodo(id, name) {
    return {
        type: TODO_ADD,
        todo: { id, name },
    };
}
function doToggleTodo(id) {
    return {
        type: TODO_TOGGLE,
        todo: { id },
    };
}

/*Actions*/
function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
    );
}
function applyShutWindows(state, action) {
    return state.windows.map(window => action.windows.find(action.id)
        ? Object.assign({}, window, {toggle: false})
        : window);
}
function applyAddTodo(state, action) {
    // automatic checkbox state is now here, instead of received action.payload
    const todo = Object.assign({}, action.todo, { completed: false });
    return state.concat(todo);
}


const store = Redux.createStore(reducer, []);

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('store update, current state:');
    console.log(store.getState());
});

/*dispatching action creators*/
store.dispatch(doAddTodo('0', 'learn redux'));
store.dispatch(doAddTodo('1', 'learn mobx'));
store.dispatch(doToggleTodo('0'));


