import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
//import {withAuthenticator} from 'aws-amplify-react'

Amplify.configure(awsconfig);


const addMovie = `
    mutation addmovie{
      createMovie(input: {
        name: "Movie 2"
        genre: "comedy"
        year: "2020-03-05"
      }) {
        id name genre year
      }
    }`

class App extends Component { 
  
  constructor(props){
    super(props)
    this.state= {
      movies : []
    }
  }

  async componentWillMount(){
    const addnewmovie = await API.graphql(graphqlOperation(addMovie));
    console.log('addnewmovie = ', addnewmovie);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

//export default withAuthenticator(App);
export default App;
