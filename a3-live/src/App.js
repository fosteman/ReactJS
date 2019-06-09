import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavigationBar from './components/NavigationBar'
import TeamInterface from './components/TeamInterface'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import mockData from './mockData'
let mockTeams = mockData.Teams;
let mockEmployees = mockData.Employees;
let mockProjects = mockData.Projects;
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


  return (<React.Fragment>
    <Container width="100%" Padding="0px">
      <NavigationBar />
        <Box display="flex"
             alignContent="flex-start"
             flexDirection="row"
             flexWrap="wrap"
        >
        {
          Teams.map(
              team =>
                  <TeamInterface
                      Team={team}
                      Employees={mockEmployees}
                      Projects={mockProjects}
                  />
              )
            }
          </Box>
    </Container>
    </React.Fragment>);
}
export default App
