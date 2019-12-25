import axios from 'axios';
import { GET_ADVERT, ADD_ADVERT, SEARCH_SUCCESS } from './types'

export const getAdvert = () => dispatch => {

    axios.get('http://localhost:3004/adverts?_sort=id&_order=desc')
        .then(res => dispatch({ type: GET_ADVERT, payload: res.data }))
}

export const addAdvert = (advert) => dispatch => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify(advert);

    axios.post('http://localhost:3004/adverts', body, config)
        .then(res => dispatch({
            type: ADD_ADVERT,
            payload: res.data
        }));
}

export const search = (advert) => dispatch => {

    axios.get(`http://localhost:3004/adverts?location_like=${advert.location}`)
        .then(res => dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        }));
}