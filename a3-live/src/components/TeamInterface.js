import React, { Component, useEffect, useState } from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    formControl: {
        maxWidth: '100%',
        minWidth: 120,
        marginBottom: theme.spacing(2)
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    card: {
        width: "15vw",
        minWidth: "180px",
        margin: theme.spacing(1),
    },
    button: {}
}));

function TeamInterface(props) {
    const classes = useStyles();
    const [TeamMembers, setTeamMembers] = React.useState(props.Team.Employees);
    const [TeamLead, setTeamLead] = React.useState(props.Team.TeamLead);
    let assignedProjects = props.Team.Projects.map(assignedID => props.Projects.find(prj => prj._id === assignedID));
    const [Projects, setProjects] = React.useState(assignedProjects);
    useEffect(() => {
        console.log('Effect on TeamI: ', props);
    });
    function handleTeamLeadChange(event) {
        setTeamLead(event.target.value)
    }
    function handleTeamMemberChange(event) {
        setTeamMembers(event.target.value)
    }
    function handleProjectChange(event) {
        setProjects(event.target.value)
    }
    function handleSave() {
        debugger;
        const putData = async () => {
            debugger;
            await axios.put(props.Url + 'team/' + props.Team._id,
                {
                    Projects,
                    Employees: TeamMembers,
                    TeamLead
                })
                .then(res => {
                    debugger;
                    //TODO invoke Save-Button Popover with `Successful ${Team.TeamName} update`
                })
                .catch( err => {
                    debugger;
                    //TODO
                });
            debugger;
        };
        debugger;
        putData();
        debugger;
    }
    /**
     * @return {string}
     */
    function EmployeeFullName(id) {
        if (Array.isArray(id)) return id.map(_id => props.Employees.find(emp => emp._id === _id)).map(employee => employee.FirstName + ' ' +  employee.LastName).join(', ');
        let foundEmployee = props.Employees.find(emp => emp._id === id);
        if (foundEmployee) return foundEmployee.FirstName + ' ' + foundEmployee.LastName;
        return `Employee with id: ${id} doesn't exist!`;
    }
    /**
     * @return {string}
     */
    function ProjectName(id) {
        if (Array.isArray(id)) {
            let assignedProjects = id.map((assignedPrj => props.Projects.find(prj => prj._id === assignedPrj._id)));
            if (assignedProjects) return assignedProjects.map(assignedPrj => assignedPrj.ProjectName).join(', ');
            else return `Projects: ${id} - don't exist!`;
        } else {
            let assignedProject = props.Projects.find(prj => prj._id === id);
            if (assignedProject) return assignedProject.ProjectName;
            else return `Project with id: ${id} doesn't exist!`;
        }
    }
    return (
        <Card className={classes.card}>
            <CardHeader title={props.Team.TeamName}
                        action={
                            <Button
                                onClick={handleSave}
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Save
                            </Button>
                        }>
            </CardHeader>
            <CardContent>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="team-lead-select">Team Lead</InputLabel>
                    <Select
                        variant="outlined"
                        id="team-lead-select"
                        single
                        autoWidth={true}
                        value={TeamLead}
                        onChange={handleTeamLeadChange}
                        input={<Input />}
                        renderValue={selected => EmployeeFullName(selected)}
                    >
                        {
                            props.Employees.map(emp =>
                                <MenuItem key={emp._id} value={emp._id}>
                                    <ListItemText primary={EmployeeFullName(emp._id)} />
                                </MenuItem>)
                        }
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="team-members-select">Team Members</InputLabel>
                    <Select
                        variant="outlined"
                        id="team-members-select"
                        multiple
                        autoWidth={true}
                        value={TeamMembers}
                        onChange={handleTeamMemberChange}
                        input={<Input />}
                        renderValue={selected => EmployeeFullName(selected)}
                    >
                        {props.Employees.map(emp =>
                            <MenuItem key={emp._id} value={emp._id}>
                                <ListItemText primary={EmployeeFullName(emp._id)} />
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="projects-select">Projects</InputLabel>
                    <Select
                        variant="outlined"
                        id="projects-select"
                        multiple
                        autoWidth={true}
                        value={Projects}
                        onChange={handleProjectChange}
                        input={<Input />}
                        renderValue={selected => ProjectName(selected)}
                    >
                        {Projects.map(prj =>
                            <MenuItem key={prj._id} value={prj._id}>
                                <ListItemText primary={ProjectName(prj._id)} />
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    );
}
export default TeamInterface
