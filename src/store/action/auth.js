import axios from 'axios';
import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
} from './types';

//Login User
export const login = (user) => dispatch => {

    //const body = JSON.stringify({ email, password });

    axios.get('http://localhost:3004/user')
        .then(res => {

            const body = res.data.filter(e => e.email === user.email && e.password === user.password);
            body.length ? dispatch({
                type: LOGIN_SUCCESS,
                payload: body
            }) : console.log("this user not register");

        })
}

//Register User
export const register = (user) => dispatch => {

    const { name, surname, email, password } = user;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ name, surname, email, password });

    axios.post('http://localhost:3004/user', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        });
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}


