import React, { Component, useEffect, useState } from 'react'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


function TeamInterface(props) {
    const [TeamLead, setTeamLead] = React.useState({});
    const [TeamMembers, setTeamMembers] = React.useState([]);
    useEffect(() => {
        console.log('Effect: ', props);
    });
    function handleChange(event) {
        let {options} = event.target;
        let value = [];
        options.forEach(opt => {
                if (opt.selected) {
                    value.push(opt.value)
                }
            }
        );
        setTeamMembers(value);
    }
    function handleTeamMemberChange(event) {}
    function handleSave(event) {}
    return (
        <div className="col-md-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <strong>{props.TeamName}</strong>
                    <button className="btn btn-primary btn-xs pull-right" onClick={handleSave}>Save</button>
                </div>
                <div className="panel-body">
                    <InputLabel>Team Lead
                    <Select
                        className="single"
                        value={TeamLead}
                        options={props.Employees}
                    />
                    </InputLabel>
                    <InputLabel>Team Members
                    <Select
                        multiple
                        value={TeamMembers}
                        onChange={handleTeamMemberChange}
                        input={<Input/>}
                        renderValue={selected => selected.join(', ')}
                    >
                        {props.Employees.map(
                            emp => (
                                <MenuItem key={emp._id} value={emp._id}>
                                    <Checkbox checked={props.Employees.indexOf(emp._id)} />
                                    <ListItemText primary={emp.FirstName + emp.LastName}/>
                                </MenuItem>
                            ))}
                    </Select>
                    </InputLabel>
                    <InputLabel>Projects
                    <Select
                        options={props.Projects}
                    >
                    </Select>
                    </InputLabel>
                </div>
            </div>
        </div>
    );
}
export default TeamInterface
