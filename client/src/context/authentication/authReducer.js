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
        case LOGIN_DONE:
        case REGISTER_DONE:
            return {
                ...state,
                authenticated: action.payload,
                message: null
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state, 
                authenticated: false,
                message: action.payload
            }
        case GET_USER:
            return {
                ...state, 
                user: action.payload,
                
            }
        
        
        default:
            return state;
    }
}