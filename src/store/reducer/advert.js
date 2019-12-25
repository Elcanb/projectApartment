import { GET_ADVERT, ADD_ADVERT, SEARCH_SUCCESS } from '../action/types'

const initialState = {
    adverts: [],
    searchResult: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVERT:
            return {
                ...state,
                adverts: action.payload
            };
        case ADD_ADVERT:
            return {
                ...state,
                adverts: [...state.adverts, action.payload]
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                searchResult: [...action.payload]
            }
        default:
            return state;
    }
}