const Redux = require('redux');
let preload = {
        thermostate: { temperature: 0.0 },
        windows: [
            {id: 0, toggle: false},
            {id: 1, toggle: false}
        ]
};
function reducer(state, action) {
    switch(action.type) {
        case 'set_thermostate_temp': {
            return applyThermostateTemp(state, action);
        }
        case 'toggle_window_shutters': {
            applyWindowToggler(state, action);
        }

    }
}

function applyWindowToggler(state, action) {
    /*Object.assign() returns a new object without mutating the old object. Object.assign() merges all given objects from the former to the latter into each other. If a former object shares the same property as a latter object, the property of the latter object will be used. Thus, the completed property of the updated window item will be the negated state of the old window item.*/
    return state.windows.map(window => window.id === action.id
        ? Object.assign({}, window, {toggle: !window.toggle})
        : window
    );
}

function applyThermostateTemp(state, action) {
    /**/
    return Object.assign({}, state.thermostate, {currentTemperature: action.temp})
}
//Create store
const store = Redux.createStore(reducer,   []);

console.log('initial state is ', store.getState());
//Dispatch action on the store

// to get latest updates from state, subscribe with a callback
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch({
    type: 'set_thermostate_temp',
    temp: 26.2
});
