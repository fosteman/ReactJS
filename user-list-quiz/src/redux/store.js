import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers';
import ActionCreators from './actionCreators';

const store = createStore(rootReducer);

/*logger*/
store.subscribe(() => console.log('Store update: ', store.getState()));

/*hard coded mock*/
store.dispatch(ActionCreators.doAddNewUser(12, '2017-12-31', [1,2,3,89], [7,31]));
store.dispatch(ActionCreators.doAddNewUser(11, '2019-6-3', [43, 22, 89], [2,39]));
store.dispatch(ActionCreators.doAddNewUser(19, '2019-3-12', [1, 12], []));


export default store;
