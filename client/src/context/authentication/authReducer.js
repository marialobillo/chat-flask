import {
    REGISTER_DONE, 
    REGISTER_FAIL, 
    GET_USER, 
    LOGIN_DONE, 
    LOGIN_FAIL, 
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case REGISTER_DONE:
            return {
                ...state,
                authenticated: action.payload,
                message: true
            }

        case REGISTER_FAIL:
            return {
                ...state, 
                authenticaed: false,
                message: action.payload
            }
        
        default:
            return state;
    }
}