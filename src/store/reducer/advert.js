import { GET_ADVERT } from '../action/types'

const initialState = {
    adverts: [
        { id: 1, location: " Nərimanov r.", price: '300.000', room: 5, floor: 10, square: 220 },
        { id: 2, location: " Qara Qarayev m.", price: '155 000', room: 2, floor: 4, square: 81.4 },
        { id: 3, location: " İnşaatçılar m.", price: '53 000', room: 1, floor: 5, square: 31 },
        { id: 4, location: " Azadlıq Prospekti m.", price: '67 500', room: 2, floor: 10, square: 55 },
        { id: 5, location: " Nərimanov r.", price: '300.000', room: 5, floor: 10, square: 220 },
        { id: 6, location: " Qara Qarayev m.", price: '155 000', room: 2, floor: 4, square: 81.4 },
        { id: 7, location: " İnşaatçılar m.", price: '53 000', room: 1, floor: 5, square: 31 },
        { id: 8, location: " Azadlıq Prospekti m.", price: '67 500', room: 2, floor: 10, square: 55 },
        { id: 9, location: " Nərimanov r.", price: '300.000', room: 5, floor: 10, square: 220 },
        { id: 10, location: " Qara Qarayev m.", price: '155 000', room: 2, floor: 4, square: 81.4 }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVERT:
            return {
                ...state,
                adverts: action.payload
            };
        default:
            return state;
    }
}