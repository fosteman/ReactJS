import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import m from 'moment';
import {connect} from 'react-redux';
import doSortUserList from '../redux/actionCreators';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(4, 4)
    }
}));

const TableHeadWithSort = ({orderByDate, handleSortRequest}) => {
    // props destruction
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    UserID
                </TableCell>

                <TableCell align='right'
                >
                    <TableSortLabel
                        active
                        direction={orderByDate ? 'desc' : 'asc'}
                        onClick={handleSortRequest}
                    >
                    Last Login
                    </TableSortLabel>
                </TableCell>

            </TableRow>
        </TableHead>
    );
};

function UserMenu({requestUserDetail, users, onSortUserList}) {
    const classes = useStyles();

    const [order, switchOrder] = React.useState(false);

    //Will be invoked upon mount and receiving search value.
    const sort = () => {
        // Flip sorting method to follow
        switchOrder(!order);
        // sorting mechanism, takes in consideration even milliseconds.
        // now dispatches USER_SORT action to Redux Store via MappedDispatcherToProps and action creator doSortUserList
        if (order)
            onSortUserList((a,b) => new m(a.last_login).format('YYYYMMDD') - new m(b.last_login).format('YYYYMMDD'));
        else
            onSortUserList((a,b) => new m(b.last_login).format('YYYYMMDD') - new m(a.last_login).format('YYYYMMDD'));
    };

    const showDetail = id => {
        let user = users.find(u => id === u.id); //TODO find out expected coercion
        console.log('ShowDetail for user: ', user);
        requestUserDetail(user);
    };

    React.useEffect(() => console.log('UserMenu component update!'), []);

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHeadWithSort handleSortRequest={sort}
                                   orderByDate={order}
                />
                <TableBody>
                    {

                        users.length ? users.map(u => (
                        <TableRow hover key={u.id} onClick={() => showDetail(u.id)}>
                            <TableCell component="th" scope="row">
                                {u.id}
                            </TableCell>
                            <TableCell align="right">{u.last_login}</TableCell>
                        </TableRow>
                    )) :
                            <TableRow>
                                <TableCell>No users with specified id found!</TableCell>
                            </TableRow>

                    }
                </TableBody>
            </Table>
        </Paper>
    );
}
function MapStateToProps(state) {
    return {
        users: state.userList
    }
}
function MapDispatchToProps(dispatch) {
    return {
        onSortUserList: sortingAlgorithm => dispatch(doSortUserList(sortingAlgorithm))
    }
}

const ConnectedUserMenu = connect(MapStateToProps, MapDispatchToProps)(UserMenu);
export default ConnectedUserMenu;
