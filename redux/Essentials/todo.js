const Redux = require('redux');
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const SHUT_WINDOWS = 'SHUT_WINDOWS';
const SET_TEMP = 'SET_TEMP';
const TINT_WINDOWS = 'TINT_WINDOWS';
const FILTER_SET = 'FILTER_SET';

function filterReducer(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case FILTER_SET : {
            return applySetFilter(state, action);
        }
        default : return state;
    }
}

function applySetFilter(state, action) { return action.filter;
}

function todoReducer(state = [], action) {
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
    return Object.assign({}, action.todo, { completed: false });
}
function applyToggleTodo(todo, action) {
    return todo.id === action.todo.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo }

function windowsReducer(state = [
    {id: 0, toggle: true, tint: { degree: 0.0 }},
    {id: 1, toggle: false, tint: { degree: 0.0 }}
], action) {
    switch (action.type) {
        case SHUT_WINDOWS: {
            return applyShutWindows(state, action);
        }
        case TINT_WINDOWS: {
            return applyTintWindows(state, action);
        }
        default:
            return state;
    }
}

/*Action creators*/
function doSetFilter(filter) {
    return {
        type: FILTER_SET,
        filter
    };
}
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

const rootReducer = Redux.combineReducers({filterState: filterReducer, windows: windowsReducer, todoState: todoReducer});
const store = Redux.createStore(rootReducer);

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('store update, current state:');
    console.log(store.getState());
});

/*dispatching action creators*/
store.dispatch(doAddTodo('0', 'learn AWS'));
store.dispatch(doToggleTodo('0'));
store.dispatch(doSetFilter('COMPLETED'));
store.dispatch(doTintWindows(100.0));


