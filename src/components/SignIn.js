import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFormSubmit = () => {
        console.log('email = ', this.state.email)
        console.log('password = ', this.state.password)
    }

    render() {
        return (
            <div className="form-container">
                <div className="form-wrap">
                    <div className="form-inner">
                        <form>
                            <div className="formrow">
                                <div className="msg">{this.state.errorMsg}</div>
                            </div>
                            <div className="formrow">
                                <label>Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="formrow">
                                <label>Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="formrow">
                                <label> </label>
                                <input type="button" id="btnsubmit" value="Sign In" onClick={() => this.handleFormSubmit()} />
                            </div>
                        </form>
                        <div className="formtoggle">New user, <span onClick={() => this.props.toggleForm()}>Sign Up</span></div>
                    </div>                    
                </div>
            </div>
        )
    }

}

export default SignIn