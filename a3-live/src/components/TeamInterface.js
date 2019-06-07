import React, { Component } from 'react'
import Select from 'react-select'

class TeamInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.team,
        }
    }
    handleSave(event) {}
    // TODO: Trace bullets. Either use multi-select, either Array.map
    render() {
        return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>{this.props.team.TeamName}</strong>
                        <button className="btn btn-primary btn-xs pull-right" onClick={this.handleSave}>Save</button>
                    </div>
                    <div className="panel-body">
                        <h5>Team Lead</h5>
                        <select className="single" >
                            {
                                this.props.team.Employees.map(emp => (
                                    <option >
                                        {emp.FirstName + emp.LastName}
                                    </option>
                                    )
                                )
                            }
                        </select>
                        <h5>Team Members</h5>
                        <select className="multiple">
                            {
                                this.props.team.Employees.map(emp =>
                                    <option>
                                        {emp.FirstName}
                                    </option>
                                )
                            }
                        </select>


                        <h5>Projects</h5>
                        <Select
    className="multiple"
    selectedOptions={this.state.Projects}
    options={this.state.Projects}
    />
                    </div>
                </div>
            </div>
        );
    }


}
export default TeamInterface
