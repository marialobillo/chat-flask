import React, { useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import axiosClient from '../../config/axios';

import {
    REGISTER_DONE, 
    REGISTER_FAIL, 
    GET_USER, 
    LOGIN_DONE, 
    LOGIN_FAIL, 
    LOGOUT
} from '../../types';

const AuthState = props => {
    const initialState = {
        // token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registerUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);

            dispatch({
                type: REGISTER_DONE,
                payload: response.data.success
            })
        } catch (error) {
            console.log('Cuando ya existe el usuario')
            const alert = {
                message: 'Username already exists. Please try again.', 
                category: 'alert-error'
            }

            dispatch({
                type: REGISTER_FAIL,
                payload: alert
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;