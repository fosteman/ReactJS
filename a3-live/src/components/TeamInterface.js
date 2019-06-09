import React, { Component, useEffect, useState } from 'react'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import {OutlinedInput} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    card: {
        maxWidth: 345,
        marginBottom: theme.spacing(2)
    },
}));
/*
const inputLabel = React.useRef(null); // TODO: Lookup in docs
const [labelWidth, setLabelWidth] = React.useState(0);
React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
*/

function TeamInterface(props) {
    const classes = useStyles();
    const [TeamMembers, setTeamMembers] = React.useState([]);
    const [TeamLead, setTeamLead] = React.useState(props.TeamLead);
    useEffect(() => {
        console.log('Effect: ', props);
    });
    function handleTeamLeadChange(event) {
        setTeamLead(event.target.value)
    }
    function handleTeamMemberChange(event) {
        setTeamMembers(event.target.value)
    }
    function handleSave(event) {}
    function EmployeeFullName(id) {
        let foundEmployee = props.Employees.find(
           emp => emp._id === id
        );
        if (foundEmployee === undefined) return "undefined Employee. Check database";
        return foundEmployee.FirstName + foundEmployee.LastName
    }
    return (
        <div className="col-md-4">
            <Card className={classes.card}>
                <CardHeader title="Here's TeamName">
                    <button className="btn btn-primary btn-xs pull-right" onClick={handleSave}>Save</button>
                </CardHeader>
                <CardContent>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Team Members</InputLabel>
                            <Select
                                multiple
                                value={TeamMembers}
                                onChange={handleTeamMemberChange}
                                input={<Input />}
                                renderValue={selected => selected.join(', ')}
                            >
                                {
                                    props.Employees.map(emp => (
                                        <MenuItem key={emp._id} value={emp._id}>
                                            <Checkbox checked={props.Team.Employees.find(TeamMember => TeamMember._id === emp._id) === true} />
                                            <ListItemText primary={EmployeeFullName(emp._id)} />
                                        </MenuItem>
                                    ))
                                }
                                }
                            </Select>
                    </FormControl>

                </CardContent>
            </Card>
        </div>

    );
}
export default TeamInterface;
