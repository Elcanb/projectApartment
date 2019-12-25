import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_SUCCESS } from "../action/types";

const initialState = {
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            }
        case LOGOUT_SUCCESS:
            return {
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}