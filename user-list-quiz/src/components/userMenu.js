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

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(4, 4)
    }
}));

// mock constructor
function createUser(id, last_login, saves, skips) {
    return { id, last_login, saves, skips };
}
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
export default function UserMenu() {
    const classes = useStyles();
    const [users, setUserList] = React.useState([
        // using constructor
        createUser (12, '2017-12-31', [1,2,3,89], [7,31]),
        createUser(11, '2019-6-3', [43, 22, 89], [2,39]),
        createUser(19, '2019-3-12', [43, 22, 89], [2,39]),
        // hard coded
        {'id': 22, 'last_login': '2019-3-12', 'saves': [], 'skips': [7]},
        {'id': 20, 'last_login': '2019-2-27', 'saves': [22], 'skips': [9]},
        {'id': 24, 'last_login': '2019-1-31', 'saves': [2,43, 22], 'skips': [1,89]},
    ]);
    const [order, switchOrder] = React.useState(false);

    const sort = () => {
        // Flip sorting method to follow
        switchOrder(!order);

        // sorting mechanism, takes in consideration even milliseconds.
        if (order)
            setUserList(users.sort((a,b) => new m(a.last_login).format('YYYYMMDD') - new m(b.last_login).format('YYYYMMDD')));
        else
            setUserList(users.sort((a,b) => new m(b.last_login).format('YYYYMMDD') - new m(a.last_login).format('YYYYMMDD')));
    };

    const showDetail = e => {
        console.log('ShowDetail!', e);
        //TODO Detailed view component
    };
    React.useEffect(() => sort(), []);
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHeadWithSort handleSortRequest={sort}
                                   orderByDate={order}
                />
                <TableBody>
                    {

                        users.map(u => (
                        <TableRow hover key={u.id} onClick={showDetail}>
                            <TableCell component="th" scope="row">
                                {u.id}
                            </TableCell>
                            <TableCell align="right">{u.last_login}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
