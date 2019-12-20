import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Login/login.scss'
import { register } from '../../../store/action/auth'

class Registration extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = this.state
        this.props.register(user);
        this.setState({
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordConfirm: ''
        })
    }

    render() {
        const { name, surname, email, password, passwordConfirm } = this.state
        return (
            <div className="form-wrapper">
                <div className="form">
                    <span className="form__title" >
                        Register
                </span>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name"
                            onChange={this.handleChange} placeholder="Name"
                            value={name} />
                        <input type="text" name="surname"
                            onChange={this.handleChange} placeholder="Surname" value={surname} />
                        <input type="email" name="email"
                            onChange={this.handleChange} placeholder="Email" value={email} />
                        <input type="password" name="password"
                            onChange={this.handleChange} placeholder="Password" value={password} />
                        <input type="password" name="passwordConfirm"
                            onChange={this.handleChange} placeholder="Confirm Password" value={passwordConfirm} />
                        <input type="submit" className="form-btn" value="Register" />
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { register })(Registration);
