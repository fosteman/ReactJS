import React, { Component } from 'react'
import Select from 'react-select'

class TeamInterface extends Component {
    constructor(props) {
        super(props);
        this.state({
            ...props,
        })
    }
    handleSave(event) {}
    render() {
        return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>{this.state.TeamName}</strong>
                        <button className="btn btn-primary btn-xs pull-right" onClick={this.handleSave}>Save</button>
                    </div>
                    <div className="panel-body">
                        <h5>Team Lead</h5>
                        <Select
                            className="single"
                            value={TeamLead}
                            options={this.state.Employees}
                        />
                        <h5>Team Members</h5>
                        <Select
                            className="multiple"
                            options={this.state.Employees}
                            optionsText={FirstName + LastName }
                            isMulti
                        />
                        <h5>Projects</h5>
                        <Select
                            className="multiple"
                            selectedOptions={this.state.Projects}
                            options={this.state.Projects}
                            optionsText={}
                            optionsValue={}
                    "></Select>
                    </div>
                </div>
            </div>
        );
    }


}
