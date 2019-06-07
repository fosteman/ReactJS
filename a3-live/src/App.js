import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Teams: []
    }
  }
  componentDidMount() {
    axios.get(this.props.url + 'teams-raw')
        .then(data => this.setState(data))
        .catch(err => console.error(err))
  }
  render() {
    return null
  }
}

export default App;
