import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {
    constructor(props) {
        super(props)
//        state
        this.state = {
            users: [],
            loading: false
        };
    }

    getUsers() {
//    toggle through loading state
    this.setState({
        loading: true
    })
      axios('https://api.randomuser.me/?nat=US&result=5')
        .then(response => this.setState({
            users: response.data.results,
            loading: false
        })
       );

    }


    componentWillMount() {
        this.getUsers();
    }

  render() {
    return (
      <div className="App">
      {!this.state.loading ?
       this.state.users.map(user =>
        <div>
        <h3>{user.cell}</h3>
        <br/>
        {user.name.first}
        </div>
         ) : 'Loading...' }
      </div>
    );
  }
}

export default App;
