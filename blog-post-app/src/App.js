import React from 'react';
import './App.css';
import Comments from './commentList';
import Entry from './Entry';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    "id": 1,
                    "content": "Libellula quadrimaculata",
                    "profile": "Skimmer, four-spotted"
                },
                {
                    "id": 2,
                    "content": "Mirounga leonina",
                    "profile": "Southern elephant seal"
                },
                {
                    "id": 3,
                    "content": "Varanus albigularis",
                    "profile": "Monitor, white-throated"
                }
            ] //comments will be stored here
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.state.comments.push({
            content: event.target.comment,
            id: this.state.comments.pop().id + 1, //increment comment_id
            profile: 'The Machine' //hardcoded profile_id
        });
        this.setState({comments: this.state.comments}); //explicitly ticking React
    }
    render() {
        return (
        <div className={'ui container'}>
            <Entry handleSubmitSignal={this.handleSubmit} />
            <Comments comments={this.state.comments}/>
        </div>
        )
    }
}

export default App;
