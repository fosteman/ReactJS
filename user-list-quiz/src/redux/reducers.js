import * as actions from './actions';
import {combineReducers} from 'redux';

const applyUserFilter = (s, a) => {
    const filterRule = a.sortingAlgorithm;
    return s.sort(filterRule); // does .sort method mutate it's object?
};
const applyUserCreator = (s, a) => {
    const newUser = a.userData;
    return s.concat(newUser);
};
const applyUserSearch = (state, action) => {
    // extract search value from an action dispatched from within SearchBar component
    const search = action.searchValue;
    // if no search value is entered, return untouched substate (user list)
    if (!search) return state;
    // Otherwise, seek for an equal ID.
    // Pour additionelle, it's possible to search for any comparing attribute,
    // however, mock data is quite dry, there're not any names
    return state.find(usr => usr.id == search); //TODO find out coercion
};

function userReducer(state = [
    {'id': 20, 'last_login': '2019-3-12', 'saves': [], 'skips': [7, 8]},
    {'id': 21, 'last_login': '2019-2-27', 'saves': [22], 'skips': [9, 10, 11]},
    {'id': 22, 'last_login': '2019-1-31', 'saves': [2,43, 22], 'skips': [1,89]},
], action) {
    switch (action.type) {
        case action.USER_SEARCH: {
            return applyUserSearch(state, action);
        }
        case actions.USER_ADD: {
            return applyUserCreator(state, action);
        }
        case actions.USER_SORT: {
            return applyUserFilter(state, action);
        }
        default: return state
    }
}

export default combineReducers({userList: userReducer});
