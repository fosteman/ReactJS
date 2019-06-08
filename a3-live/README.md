# `Team Details` rework
This repo contains instructions to build an app to leverage team management. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hosts backend with team data, to access it application will take advantage of library [Axios](https://www.npmjs.com/package/axios).



Semantics and Styling are default inline bootstrap, however, there are several excellent styling frameworks for React: [Semantic-UI](), [evergreen](), [Material]()
## Material UI
To install:
```bash
npm install @material-ui/core
```

## Dependencies
Run the following commands to bootstrap your project directory and install dependencies
```javascript
npx create-react-app a3-react
npm i axios
```
## Component Structure
To build an app, one need to understand component hierarchy. 

<em>What's being built on this cite? </em>

Glance over the image of application above, and discern components. React is about composable components, so naming them semantically is advised. There're several of them:
- `<NavigationBar>` - the top line, where links to other pages will reside
  - `<Link>` - 'Team Details', name of the app linked to the (only) main page
- `<TeamContainer>` - repeating container which presents controls over a team.
  - `<TeamHeader>` - holds team name
  - `<SaveButton>` - syncs changes to Backend
  - `<MultiSelect>` - selectors for <strong>Team Lead</strong>, <strong>Team Members</strong>, <strong>Projects</strong>
  
Now, that components to be built are identified, let's create folder `components` containing `Link.js` and `NavigationBar.js`
```bash
mkdir components
touch NavigationBar.js Link.js
```
### `components/Link`
Building component hierarchy is like erecting a Pyramid - start from foundation to the topmost block.

I thus begin with `<Link>`
```jsx harmony
import React from 'react'

const Link = props => <a className="navbar-brand" href={props.to}>{props.children}</a>;

export default Link
```
To create React Component Module (i.e. js module), `react` core library must be imported, otherwise JSX code will not be recognized

In 3 declarations <em>React Component Module</em> `<Link>` is ready for re-use!

### `components/NavigationBar`

For now, I cannot see any state, nor functions this component should perform, thus it is an <strong>element</strong>.

`components/Link` must be imported as a React Component, and provided with children (in our case - text 'Team Details') and props ('`href="#"`, it's our main page)

```jsx harmony
import React from 'react'
import Link from 'Link'

const NavigationBar = (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to={"#"}>Assignment 3 - Team Details</Link>
            </div>
        </div>
    </nav>
);

export default NavigationBar
```
### `components/TeamInterface`
Card with controls to TeamInterface includes looping through arrays to build `<select>` elements
```jsx harmony
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
```

### `src/App`
Root module for application binds together components above.
It is a stateful component, API is fetched in `componentDidMount` lifecycle method. The data is then passed down children via `props`
```jsx harmony
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
```

