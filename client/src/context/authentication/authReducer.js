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
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null, 
                authenticated: null,
                message: action.payload,
                user: null
            }
        case GET_USER:
            return {
                ...state, 
                user: action.payload,
                authenticated: true
                
            }
        
        default:
            return state;
    }
}