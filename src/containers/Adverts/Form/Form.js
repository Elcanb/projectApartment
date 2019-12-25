import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import '../../Auth/Login/login.scss'
import { addAdvert } from '../../../store/action/advert';

class Form extends Component {

    state = {
        location: '',
        price: '',
        room: '',
        floor: '',
        square: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const advert = this.state
        this.props.addAdvert(advert);
        this.setState({
            location: '',
            price: '',
            room: '',
            floor: '',
            square: ''
        })
        this.props.history.push('/')
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to='/login' />
        }

        const { location, price, room, floor, square } = this.state;
        return (
            <div className="form-wrapper">
                <div className="form">
                    <span className="form__title" >
                        Add your advert
                </span>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="location"
                            onChange={this.handleChange} placeholder="Location"
                            value={location} />
                        <input type="number" name="price"
                            onChange={this.handleChange} placeholder="Price" value={price} />
                        <input type="number" name="room"
                            onChange={this.handleChange} placeholder="Room" value={room} />
                        <input type="number" name="floor"
                            onChange={this.handleChange} placeholder="Floor" value={floor} />
                        <input type="number" name="square"
                            onChange={this.handleChange} placeholder="Square" value={square} />
                        <input type="submit" className="form-btn" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addAdvert })(Form)
