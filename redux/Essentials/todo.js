const Redux = require('redux');
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const SHUT_WINDOWS = 'SHUT_WINDOWS';
const SET_TEMP = 'SET_TEMP';
const TINT_WINDOWS = 'TINT_WINDOWS';

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
        case SET_TEMP: {
            return applySetTemp(state, action);
        }
        case TINT_WINDOWS: {
            return applyTintWindows(state, action);
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
function doSetTemperature(currentTemperature) {
    return {
        type: SET_TEMP,
        currentTemperature
    };
}
function doTintWindows(tint) {
    return {
        type: TINT_WINDOWS,
        tint
    };
}
/*Actions*/
function applySetTemperature(state, action) {
    const thermostatUpdate = Object.assign({}, state.thermostat, { currentTemperature: action.temp });
    return Object.assign({}, state, thermostatUpdate);
}
function applyToggleTodo(state, action) {
    const todos = state.todos.map(todo =>
        todo.id === action.todo.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo );
    return Object.assign({}, state, { todos });
}
function applyShutWindows(state, action) {
    return state.windows.map(window => action.windows.find(action.id)
        ? Object.assign({}, window, {toggle: false})
        : window);
}
function applyTintWindows(state, action) {
    return state.windows.map(window => action.windows.find(action.id)
        ? Object.assign({}, window, {toggle: false})
        : window);
}

function applyAddTodo(state, action) {
    // automatic checkbox state is now here, instead of received action.payload
    const todo = Object.assign({}, action.todo, { completed: false });
    // assign new list to a variable
    const todos = state.todos.concat(todo);
    // return new state with new list
    return Object.assign({}, state, { todos });
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
store.dispatch(doTintWindows(100.0));


