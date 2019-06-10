import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavigationBar from './components/NavigationBar'
import TeamInterface from './components/TeamInterface'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
const url = "https://fosteman-mongo-backend.herokuapp.com/";

function App() {
  const [Teams, loadTeams] = useState([]);
  const [Employees, loadEmployees] = useState([]);
  const [Projects, loadProjects] = useState([]);
  const [LoadStatus, setLoadStatus] = useState(false);

  useEffect( () => {
    const fetchData = async () => {
      let t = await axios.get(url + 'teams-raw');
      loadTeams(t.data);
      let e = await axios.get(url + 'employees');
      loadEmployees(e.data);
      let p = await axios.get(url + 'projects');
      loadProjects(p.data);
      setLoadStatus(true);
    };
    fetchData();
  }, []);


  return (<React.Fragment>
    <Container>
      <NavigationBar />
        <Box display="flex"
             alignContent="flex-start"
             flexDirection="row"
             flexWrap="wrap"
        >
        { LoadStatus ?
          Teams.map(
              team =>
                  <TeamInterface
                      key={team._id}
                      Team={team}
                      Employees={Employees}
                      Projects={Projects}
                      Url={url}
                  />
              ) :
            (
                <p>{
                  // TODO: Loading
                  }</p>
            )
            }
          </Box>
    </Container>
    </React.Fragment>);
}
export default App
