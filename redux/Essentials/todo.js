const Redux = require('redux');
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const SHUT_WINDOWS = 'SHUT_WINDOWS';


//sample actions
const action = {
    type: TODO_ADD,
    todo: { id: '0', name: 'Learn Redux' },
};
const toggleTodoAction = {
    type: TODO_TOGGLE,
    todo: { id: '0' },
};
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
            return shutWindows(state, action);
        }
        default : return state;
    }
}

function applyAddTodo(state, action) {
    return state.concat(action.todo);
}

function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
    );
}
function shutWindows(state, action) {
    return state.windows.map(window => action.windows.find(action.id)
        ? Object.assign({}, window, {toggle: false})
        : window);
}


const store = Redux.createStore(reducer, []);

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('store update, current state:');
    console.log(store.getState());
});

