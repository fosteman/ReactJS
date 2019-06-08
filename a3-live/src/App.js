import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
import NavigationBar from './components/NavigationBar'
import TeamInterface from './components/TeamInterface'

//Mocking data from json
import data from './mockData'
let mockTeams = data.Teams;
let mockEmployees = data.Employees;
let mockProjects = data.Projects;
//const url = "https://fosteman-mongo-backend.herokuapp.com/";

function App() {
  const [Teams, loadTeams] = useState([]);
  useEffect(()=> {
    loadTeams(mockTeams);
    /* API fetch
    axios.get(url + 'teams-raw')
        .then(Teams => this.setState({Teams}))
        .catch(err => console.error(err));
    axios.get(url + 'employees')
        .then(Employees => this.setState({Employees}))
        .catch(err => console.error(err));
    axios.get(url + 'projects')
        .then(Projects => this.setState({Projects}))
        .catch(err => console.error(err));
    this.state.loaded = true;
  */
  });
  //TODO: refactor for use with hooks and mockData
  //TODO: combine employees with teams and projects

  return (
    <React.Fragment>
      <NavigationBar />

    <div className="container" id="main">
      <div className="row">
            {
              this.state.Teams.data &&
              this.state.Teams.data.map(
                   team => {
                    return <TeamInterface team={team} employeeList={Employees} project={project}/>
                  }
              )
            }
          </div>
    </div>

      <div id="genericModal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title"/></div>
            <div className="modal-body"/>
          </div>
        </div>
      </div>
    </React.Fragment>
    );
  }

export default App;
