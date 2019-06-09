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

function TeamInterface(props) {
    const classes = useStyles();
    const [TeamMembers, setTeamMembers] = React.useState(props.Team.Employees);
    const [TeamLead, setTeamLead] = React.useState(props.TeamLead);
    let assignedProjects = props.Team.Projects.map(assigned => props.Projects.find(prj => prj._id === assigned._id) );
    const [Projects, setProjects] = React.useState(assignedProjects);
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
            if (Array.isArray(id)) return id.map(_id => props.Employees.find(emp => emp._id === _id)).map(employee => employee.FirstName + ' ' +  employee.LastName).join(', ');

        let foundEmployee = props.Employees.find(
           emp => emp._id === id
        );
        if (!foundEmployee) return "undefined Employee. Check database";
        return foundEmployee.FirstName + foundEmployee.LastName
    }
    return (
        <div className="col-md-4">
            <Card className={classes.card}>
                <CardHeader title={props.Team.TeamName}>
                    <Button onClick={handleSave} variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
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
