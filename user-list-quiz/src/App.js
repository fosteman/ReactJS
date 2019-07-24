import React from 'react';

import UserMenu from './components/UserMenu';
import UserDetail from "./components/UserDetail";
import TopBar from "./components/TopBar";


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

        <UserMenu requestUserDetail={handleDetailedViewOpen}
        />
        <UserDetail open={detailedView}
                    userDetail={userDetails}
                    handleClose={handleDetailedViewClose}
        />
    </div>
  )
}
