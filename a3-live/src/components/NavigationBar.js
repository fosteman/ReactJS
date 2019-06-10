import React from 'react'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function NavigationBar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar color="white">
                <Link to="#" variant="h5">Assignment 3 - Team Details</Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar
