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

  return (
    <div className="Users">
        <TopBar />

        <UserMenu usersMock={usersMockupData} requestUserDetail={handleDetailedViewOpen}
        />
        <UserDetail open={detailedView}
                    userDetail={userDetails}
                    handleClose={handleDetailedViewClose}
        />
    </div>
  )
}
