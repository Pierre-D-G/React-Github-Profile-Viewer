import React, { Component } from 'react';
import Profile from './components/Github/User_Profile';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ErikBjare',
      userData: [],
      userRepos: [],
      perPage: 7
    }
  }

  // Retrieving data from Github API using fetch()
  getUserData = () => {
    fetch('http://api.github.com/users/' + this.state.username)
      .then(function(response){
        if(!response.ok){
          throw Error(response.statusText);
        }
        return response
      })
        .then(response => response.json())
          .then(json => {
            console.log(json);
            this.setState(
              {userData: json})
          })
            .catch(function(error){
              console.log('There was a problem with fetch operation:' + error.message)
            })
  }


  componentDidMount(){
    this.getUserData();
  }

  render() {
    return (
      <div>
        <Profile userData = {this.state.userData}/>
      </div>
    );
  }
}

export default App;
