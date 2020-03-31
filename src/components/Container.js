import React, {Component} from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'
import Movies from './Movies'

class Container extends Component{
    constructor(props){
        super(props)
        this.state = {
            isUserLoggedIn: false,
            showLoginForm: true
        }
    }

    handleToggle = () => {        
        let newLoginState = !this.state.showLoginForm        
        this.setState({showLoginForm: newLoginState})
    }

    render(){
        if(this.state.isUserLoggedIn) return (<Movies/>)
        else if(this.state.showLoginForm) return (<SignIn toggleForm = {this.handleToggle} />)
        else return (<SignUp toggleForm = {this.handleToggle} />)
    }
}

export default Container