#Reactive blog
This is an introductory walk-through to build a Single Web Page React-driven app with RESTful backend, 3rd-party libraries and`react-create-app`
###React
React is a declarative, component­based library for building user interfaces that works on a variety of platforms.
It is primarily concerned with the view aspects of UI. This means it’s not built to do many of the jobs of a more comprehensive framework or library.
It is developed and maintained by Facebook, and is meant to serve needs of Facebook.com
###vDOM
Virtual DOM in React tries to do just enough to be performant while freeing you up to think about other aspects of your application. One of the main ways it does that is by encouraging you to be declarative instead of imperative. You get to declare how your components should behave and look under different states, and React’s core library handles the complexity of managing updates, updating the UI to reflect changes, and so on.
###Component Thinking
Component (noun) is a partial unit of a whole. They are reusable and composable, easily shared. 
###Project Data
Blog posts will be stored using JSON API endpoint: https://api.myjson.com/bins/xz33j

It's CORS-enabled, hence this API allows us to load the shared version of our app. 
The data (posts) will be stored as:
```$xslt
    [
      {
        "message": String,
        "profile": String,
        "moment": Object
      }
    ]
```
###Project Creation with Create React App
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
```
npx create-react-app
cd blog-post-app
npm start
```
This will create `/blog-post-app` directory, with all dependencies installed, and a boilerplate project created and running in newly opened browser window.
###React Project Layout
Directory `/blog-post-app` should look like:
```$xslt
/blog-post-app
    /public
        favicon.ico <-- project's icon
        index.html  <-- page template, minimalistically, it has one <div id='root'></div>
    /src
        App.js      <-- App Module, contains our application code
        index.js    <-- Root Module, mounts App in #root element
```
###`src/App.js`
Contains exported function App, which returns the page we see in browser. This is our solo component application inside.
###`src/index.js`
This is an entry point to our Application, in it `<App />` is mounted using `ReactDOM.render()` in specified element in `index.html`
######Mind, that we're importing `React` module into both files, so that components are recognized.
###Component `App`
This is our single element at present, it is represented as a JS function returning HTML code.
######React elements and components render UI
###`ReactDOM.render`
This method needs an element type ReactElement and a mount-point in DOM to proceed rendering. 
###JSX
To create more sophisticated (dynamic) components with state, properties and attributes - we need to use XML\HTML-like language enabling us to write 
```
const el = <h1>Hello, Tim</h1>;
```
which is neither string nor HTML. Embed expressions: 
```
const name = 'Josh Perez'; 
const el = <h1>Hello, {name}</h1>;
```
And render them using ReactDOM `ReactDOM.render(el, document.getElementById('root'));`
###App Design
Components:
- `View` will hold everything together
- `CommentListing` will show all comments made
- `Comment` will be a singular comment
- `Entry` will provide means to create a new message

Let's add `src/Comment.js`, `src/Comments.js`, `src/Entry.js`, while `View` component will reside in `src/App.js`
####`src/Entry.js`
`Entry` is an entry box with input field and a button to send a message to the list.
```$xslt
import React from 'react';

const Entry = props => (
        <div className="ui container"> //Semantic-UI classes
            <div className={'ui input'}> //NOT a form element
                <label>Comment:
                    <input type='text' placeholder='Your comment...' onChange={this.props.handleInputChange} />
                </label>
                <button onClick={this.props.handleSubmit} value='Send' />
            </div>
        </div>
);
export default Entry;
```
####`src/Comment.js`
`Comment` is a singular comment, showing us the content and user profile name
```$xslt
import React from 'react';

const Comment = props => {
    const { comment } = props; //argument ES6-destruction
    return (
        <div className="comment" key={comment.id}>
            <p className="content"> {comment.content} </p>
            <p className="profile"> {comment.profile} </p>
        </div>
    );
};
export default Comment;
```
####`src/Comments.js`
`Comments` is a functional component. It lists unique `Comment`s. 
```$xslt
import React from 'react';
import Comment from './Comment';

const Comments = props => {
    const { comments } = props;
    if (!comments) {
        return <h2>Error loading comments!</h2>;
    }
    return (
        <div className="ui list">
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};
export default Comments;
```







