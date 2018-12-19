function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    }
    else if (action.type === 'DECREMENT') {
        return state - action.amount;
    }
    else
        return state;
}
const incrementAction = {type: 'INCREMENT', amount: 2};
const decrementAction = {type: 'DECREMENT', amount: 2};

function createStore(reducer) {
    let state = 0;
    const getState = () => (state);
    const dispatch = (action) => {
        state = reducer(state, action);
    };
    return { getState, dispatch };
}

const temp = createStore(reducer);
console.log(temp.getState());
    temp.dispatch(incrementAction);
console.log(temp.getState());
temp.dispatch(incrementAction);
console.log(temp.getState());temp.dispatch(incrementAction);
console.log(temp.getState());