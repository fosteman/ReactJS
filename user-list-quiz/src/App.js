import React from 'react';

import UserMenu from './components/UserMenu';
import UserDetail from "./components/UserDetail";
import TopBar from "./components/TopBar";

// mock constructor
const createUser = (id, last_login, saves, skips) => { return {id, last_login, saves, skips} };

const usersMockupData = [
    // using constructor
    createUser (12, '2017-12-31', [1,2,3,89], [7,31]),
    createUser(11, '2019-6-3', [43, 22, 89], [2,39]),
    createUser(19, '2019-3-12', [43, 22, 89], [2,39]),
    // hard coded
    {'id': 22, 'last_login': '2019-3-12', 'saves': [], 'skips': [7]},
    {'id': 20, 'last_login': '2019-2-27', 'saves': [22], 'skips': [9]},
    {'id': 24, 'last_login': '2019-1-31', 'saves': [2,43, 22], 'skips': [1,89]},
];

export default function App() {
const [detailedView, viewDetails] = React.useState(false);
const [userDetails, setUserDetails] = React.useState({});
const [searchValue, setSearchValue] = React.useState('');
const handleDetailedViewOpen = (user) => {
    console.log('handleDetailedViewOpen');
    setUserDetails(user);
    viewDetails(true);
};

const handleDetailedViewClose = () => {
    console.log('handleDetailedViewClose');
    setUserDetails({});
    viewDetails(false);
};

const handleSearch = searchEvent => {
    if (!searchEvent.target.value) return setSearchValue('');

    // Otherwise, grab search value
    let search = searchEvent.target.value;

    // ...and propagate state down UserMenu Component which in turn will take care of filtering users, or, using regex alternative of which: new RegExp(/+search+/)
    return setSearchValue(search);
};

  return (
    <div className="Users">
        <TopBar handleSearch={handleSearch} />

        <UserMenu searchValue={searchValue} usersMock={usersMockupData} requestUserDetail={handleDetailedViewOpen}
        />
        <UserDetail open={detailedView}
                    userDetail={userDetails}
                    handleClose={handleDetailedViewClose}
        />
    </div>
  )
}
