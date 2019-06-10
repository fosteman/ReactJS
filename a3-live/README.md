# `Team Details` rework
This repo contains instructions to build an app to leverage team management. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hosts backend with team data, to access it application will take advantage of library [Axios](https://www.npmjs.com/package/axios).

## Styling 

[Material](https://material-ui.com) is chosen, however, there are several other excellent styling frameworks for React: [Semantic-UI](https://react.semantic-ui.com/), [evergreen](https://evergreen.segment.com/)

To install Material UI
```bash
npm install @material-ui/core
```

## Dependencies
Run the following commands to bootstrap your project directory and install dependencies
```bash
npx create-react-app a3-react
npm i axios                                  
```
## Component Structure
To build an app, one needs to understand component hierarchy
![MaterialDesign](team-management-material-ui.gif)
<em>What's being built on this site? </em>

Glance over the image of application above, and discern components. React is about composable components, so naming them semantically is advised. There're several of them:
- `<NavigationBar>` - the top line, where links to other pages will reside
  - `<Link>` - 'Team Details', name of the app linked to the (only) main page
- `<TeamInterface>` - repeating card which presents controls over a team
  - `<TeamHeader>` - holds team name and **Save** button
    - `<SaveButton>` - saves changes
  - `<MultiSelect>` - selectors for 
    - Team Lead
    - Team Members
    - Projects
  
Now, that React Modules exporting components to be built are identified, let's create folder `components` containing 
- `NavigationBar.js`
- `TeamInterface.js`
```bash
mkdir components
touch components/NavigationBar.js components/TeamInterface.js
```
### Building component hierarchy 
...Is like erecting a pyramid - It's a good idea to begin from foundation to the topmost block.

### `components/NavigationBar.js`
`<Link>` is the smallest component in the app. We will utilize Material-UI `<Link>`.

```jsx harmony
import React from 'react'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const HeaderTheme = createMuiTheme({
    palette: {
        textPrimary: {
            main: '#e3f2fd',
            contrastText: '#fff',
        }}});
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }

});

function NavigationBar() {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={HeaderTheme}>
            <AppBar className={classes.root} position="static">
                <Toolbar >
                    <Link to="#" variant="h4" color="white">Assignment 3 - Team Details</Link>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
}
export default NavigationBar
```
To create React Component Module (i.e. js module), `react` core library must be imported, otherwise JSX code will not be recognized

### `components/TeamInterface.js`
Card with controls to TeamInterface includes looping through arrays to build `<select>` elements
```jsx harmony
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
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
    SaveButton: {
        padding: theme.spacing(2),

    },
    typography: {
        padding: theme.spacing(2)
    }
}));

function TeamInterface(props) {
    const classes = useStyles();
    const [TeamMembers, setTeamMembers] = React.useState(props.Team.Employees);
    const [TeamLead, setTeamLead] = React.useState(props.Team.TeamLead);
    let assignedProjects = props.Team.Projects.map(assignedID => props.Projects.find(prj => prj._id === assignedID));
    const [Projects, setProjects] = React.useState(assignedProjects);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [SavePopoverResponse, setSavePopoverState] = React.useState("Loading...");
    useEffect(() => {});
    function handleTeamLeadChange(event) {
        setTeamLead(event.target.value)
    }
    function handleTeamMemberChange(event) {
        setTeamMembers(event.target.value)
    }
    function handleProjectChange(event) {
        setProjects(event.target.value)
    }
    function handlePopoverClose(event) {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'save-popover' : null;
    function handleSave(event) {
        setAnchorEl(event.currentTarget);
        const putData = async () => {
            //debugger;
            await axios.put(props.Url + 'team/' + props.Team._id,
                {
                    Projects,
                    Employees: TeamMembers,
                    TeamLead
                })
                .then(response => setSavePopoverState(response.data.message));
        };
        putData();

    }
    //PopoverManagement ends here
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
                            <React.Fragment>
                            <Button
                                aria-describedby={id}
                                onClick={handleSave}
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Save
                            </Button>
                            <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                            >
                            <Typography className={classes.typography}>{SavePopoverResponse}</Typography>
                            </Popover>
                            </React.Fragment>
                        }>
            </CardHeader>
            <CardContent>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="team-lead-select">Team Lead</InputLabel>
                    <Select
                        variant="outlined"
                        id="team-lead-select"
                        single="true"
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
```

### `src/App`
Root module for application binds together components above.
It is a stateful component, API is fetched in `componentDidMount` lifecycle method. The data is then passed down children via `props`
```jsx harmony
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
```

