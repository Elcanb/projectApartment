import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './types';

//Login User
export const login = (email, password) => dispatch => {

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json",
            "Type": "Basic "
        }
    };

    const body = JSON.stringify({ email, password });

    axios.post('http://localhost:8080/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
}

//Register User
export const register = (user) => dispatch => {

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    const body = JSON.stringify(user);

    axios.post('http://localhost:8080/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        });
}
