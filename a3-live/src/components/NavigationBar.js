import React from 'react'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const HeaderTheme = createMuiTheme({
    palette: {
        textPrimary: {
            main: '#e3f2fd',
            contrastText: '#fff',
        }}});
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }

});

function NavigationBar() {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={HeaderTheme}>
            <AppBar className={classes.root} position="static">
                <Toolbar >
                    <Link to="#" variant="h4" color="white">Assignment 3 - Team Details</Link>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
}

export default NavigationBar
