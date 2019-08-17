import React from 'react';

import TopBar from "./components/TopBar";
import UserMenu from './components/UserMenu';
import UserDetail from "./components/UserDetail";

import {connect} from 'react-redux';

import doSearchUser  from '../redux/actionCreators';

function mapDispatchToProps(dispatch) {
    return {
        onSearch: search => dispatch(doSearchUser(search)),
    };
}
const ConnectedTopBar = connect(null, mapDispatchToProps)(TopBar);


export default function App() {
    // UserDetail component toggle
    const [detailedView, viewDetails] = React.useState(false);
    // UserDetail component StateToProps
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

    /* This is to be substituted by Redux action.
    * Hence search value should not be stored in App, but rather in the store
    * And UserMenu component will be subscribed to the store's state.userList update
    * */

  return (
    <div className="Users">
        <ConnectedTopBar />

        <UserMenu requestUserDetail={handleDetailedViewOpen} />

        <UserDetail open={detailedView}
                    userDetail={userDetails}
                    handleClose={handleDetailedViewClose}
        />
    </div>
  )
}
