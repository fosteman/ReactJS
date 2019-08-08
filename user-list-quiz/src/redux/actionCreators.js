import * as actions from './actions';

export default {
    function() {
        return {
            doSortUserList: sortingAlgorithm => {
                return {
                    type: actions.USER_SORT,
                    sortingAlgorithm
                }
            },
            doAddNewUser: (id, last_login, saves, skips) => {
                return {
                    type: actions.USER_ADD,
                    userData: {id, last_login, saves, skips}
                }
            },
            doSearchUser: searchValue => {
                return {
                    type: actions.USER_SEARCH,
                    searchValue
                }
            }
        }
    }
};
