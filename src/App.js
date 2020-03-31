import React, { Component } from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
//import {withAuthenticator} from 'aws-amplify-react'
import './App.css';
import Container from './components/Container'

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
    //const addnewmovie = await API.graphql(graphqlOperation(addMovie));
    //console.log('addnewmovie = ', addnewmovie);
  }

  render() {
    return (
      <div className="App">
        <header>header here</header>
        <div className="container">                
          <Container/>
        </div>
        <footer>Footer here</footer>
      </div>
    );
  }
}

//export default withAuthenticator(App);
export default App;
