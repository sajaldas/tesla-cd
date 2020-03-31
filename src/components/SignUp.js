import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            phone: ""
        }
    }

    handleChange = (e) => {        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFormSubmit = () => {
        // console.log('fname = ', this.state.fname)
        // console.log('lname = ', this.state.lname)
        // console.log('email = ', this.state.email)
        // console.log('phone = ', this.state.phone)
        this.setState({ errorMsg:'' })

        const {fname, lname, email, password, phone } = this.state;
        Auth.signUp({
            'username': email,
            'password': password,
            attributes: {
                'email': email,
                'phone_number': phone,
                'custom:first_name': fname,
                'custom:last_name': lname
            }
        })
            .then((data) => {
                console.log('data = ', data);
                if (data.message) {
                    console.log('error');
                    this.setState({ errorMsg: data.message })
                }
                else if (data.user) {
                    console.log('success');
                    this.setState({ signedUp: true })
                }
            })
            .catch((err) => {
                console.log('err = ', err)
                if (err.message) {
                    console.log('error');
                    this.setState({ errorMsg: err.message })
                    //console.log(this.state.errorMsg)
                }
            })
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
                                <label>First Name</label>
                                <input type="text" id="fname" onChange={this.handleChange} autoComplete="false" />
                            </div>
                            <div className="formrow">
                                <label>Last Name</label>
                                <input type="text" id="lname" onChange={this.handleChange} autoComplete="false" />
                            </div>
                            <div className="formrow">
                                <label>Email</label>
                                <input type="email" id="email" onChange={this.handleChange} autoComplete="false" />
                            </div>
                            <div className="formrow">
                                <label>Password</label>
                                <input type="password" id="password" onChange={this.handleChange} autoComplete="false" />
                            </div>
                            <div className="formrow">
                                <label>Phone</label>
                                <input type="text" id="phone" onChange={this.handleChange} autoComplete="false" />
                            </div>
                            <div className="formrow">
                                <label> </label>
                                <input type="button" id="btnsubmit" value="Sign Up" onClick={() => this.handleFormSubmit()} />
                            </div>
                        </form>
                        <div className="formtoggle">Existing user, <span onClick={() => this.props.toggleForm()}>Sign In</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp