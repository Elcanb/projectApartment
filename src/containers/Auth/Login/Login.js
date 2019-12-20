import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../../../store/action/auth'
import './login.scss'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <span className="form__title" >
                        Login
                        </span>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                        <input type="submit" className="form-btn" />
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(null, { login })(Login);
