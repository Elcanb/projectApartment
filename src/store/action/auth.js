import axios from 'axios';
import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
} from './types';

//Login User
export const login = (email, password) => dispatch => {

    //const body = JSON.stringify({ email, password });

    axios.get('http://localhost:3004/user')
        .then(res => {

            const body = res.data.filter(e => e.email === email && e.password === password);
            body.length ? dispatch({
                type: LOGIN_SUCCESS,
                payload: body
            }) : console.log("this user not register");

        })
}

//Register User
export const register = (name, surname, email, password) => dispatch => {

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


