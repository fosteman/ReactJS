import React from 'react'
import axios from 'axios'
import NavigationBar from './components/NavigationBar'
import TeamInterface from './components/TeamInterface'

const url = "https://fosteman-mongo-backend.herokuapp.com/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Teams: [],
      Employees: [],
      Projects: [],
      loaded: false
    }
  }
  componentDidMount() {
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
  }
  render() {
    return (
    <React.Fragment>
      <NavigationBar />

    <div className="container" id="main">
      {!this.state.loaded ? null :
          <div className="row">
            {
              this.state.Teams.data &&
              this.state.Teams.data.map(
                   (team) => {
                    //TODO: combine employees with teams, find project
                    let employeeList = this.state.Employees;
                    let project = this.state.Projects;
                    return <TeamInterface team={team} employeeList={employeeList} project={project}/>
                  }
              )
            }
          </div>
      }
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
}

export default App;
