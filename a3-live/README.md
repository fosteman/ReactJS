# `Team Details` rework
This repo contains instructions to build an app to leverage team management. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hosts backend with team data, to access it application will take advantage of library [Axios](https://www.npmjs.com/package/axios).



Semantics and Styling are default inline bootstrap, however, there are several excellent styling frameworks for React: [Semantic-UI](), [evergreen](), [Material]()

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
### `Link.js`
Building component hierarchy is like erecting a Pyramid - start from foundation to the topmost block.

I thus begin with `<Link>`
```jsx harmony
import React from 'react'

const Link = props => <a className="navbar-brand" href={props.to}>{props.children}</a>;

export default Link
```
To create React Component Module (i.e. js module), `react` core library must be imported, otherwise JSX code will not be recognized

In 3 declarations <em>React Component Module</em> `<Link>` is ready for re-use!

### `NavigationBar.js`

For now, I cannot see any state, nor functions this component should perform, thus it is an <strong>element</strong>.

`<Link>` must be imported as a React Component, and provided with children (in our case - text 'Team Details') and props ('`href="#"`, it's our main page)

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
### `TeamInterface`

```jsx harmony

```

### `<>`

```jsx harmony

```
### `<>`

```jsx harmony

```
