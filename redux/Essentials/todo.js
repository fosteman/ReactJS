const Redux = require('redux');
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';

//sample actions
const action = {
    type: TODO_ADD,
    todo: { id: '0', name: 'Learn Redux' },
};
const toggleTodoAction = {
    type: TODO_TOGGLE,
    todo: { id: '0' },
};


function reducer(state, action) {
    switch(action.type) {
        case TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE : {
            return applyToggleTodo(state, action);
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

const store = Redux.createStore(reducer, []);

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('store update, current state:');
    console.log(store.getState());
});

