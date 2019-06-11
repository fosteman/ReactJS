# `Team Management` app
This repo contains instructions to build React app to leverage team management. 
![Material-UI](team-management-material-ui.gif)

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hosts RESTful API backend with team data, to access it application will take advantage of library [Axios](https://www.npmjs.com/package/axios).

## Styling 

[Material](https://material-ui.com) is applied, however, there are several other excellent styling frameworks for React worth checking out: [Semantic-UI](https://react.semantic-ui.com/), [evergreen](https://evergreen.segment.com/) and lastly, [Bootstrap](https://react-bootstrap.github.io/), for which preview is beyond this paragraph!
[Bootstrap-UI](team-management-bootstrap.gif)

## Dependencies
Run the following commands to clone my entire ReactWorks repository, locate this project's folder, install dependencies and start the application up on default React's 3000 port. Browser will open page automatically.
```bash
git clone https://github.com/fosteman/ReactWorks.git
cd ReactWorks/a3-live
npm i && npm start                                 
```
## Component Structure
<em>What's being built on this site? </em>

Complete Single Page Web application requires the following component hierarchy

_Note_: you may choose to glance over the UI gifs above and try to discern components, they are readily available to an untrained eye!

Building component hierarchy is like erecting a pyramid - start from foundation to the topmost block. React is all about composable components, so I named them semantically:
- `<NavigationBar>` - the top line, where links to other pages will reside
  - `<Link>` - 'Team Details', name of the app linked to the (only) main page
- `<TeamInterface>` - repeating card which presents controls over a team
  - `<TeamHeader>` - holds team name and **Save** button
    - `<SaveButton>` - syncs changes to Backend
  - `<MultiSelect>` - selectors for 
    - Team Lead
    - Team Members
    - Projects

### `components/NavigationBar`
This component is stateless, it provides static navigation bar to the app.

_Note_: If application grows in size and page count, this module will assume slight modifications; for now - it's hard coded and hardly re-usable.

### `src/components/TeamInterface`
Iteratively created Interface for each team registered in the system. Via this interface changes to Team's composition can be made and saved.

### `src/TeamManagement`
Root module for application binds together components above.
It is a stateful component, API is fetched via asynchronous `useEffect` hook. The data is then passed down children via `props`
