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
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
     

    const registerUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            dispatch({
                type: REGISTER_DONE,
                payload: response.data.token
            })
            getAuthenticatedUser();
        } catch (error) {
            console.log(error);
            const alert = {
                message: 'Username already exists. Please try again.', 
                category: 'alert-danger'
            }
            dispatch({
                type: REGISTER_FAIL,
                payload: alert
            })
        }
    }

    const getAuthenticatedUser = async () => {
        const token = localStorage.getItem('token');
        let auth_token = {};
        if(token){
            // TODO get user authenticated from token
            auth_token = {
                "auth_token": token
            };
        }

        try {
            const response = await axiosClient.post('/api/token', auth_token);
            const authenticatedUser = response.data.data;
            dispatch({
                type: GET_USER, 
                payload: authenticatedUser
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_FAIL
            })
        }
    }

    const loginUser = async data => {
        try {
            const response = await axiosClient.post('/api/login', data);
            const auth_token = response.data.token;
            dispatch({
                type: LOGIN_DONE,
                payload: auth_token
            });
            getAuthenticatedUser();
        } catch (error) {
            console.log(error);
            const alert = {
                message: 'Username or password are incorrect. Please try again.', 
                category: 'alert-danger'
            }

            dispatch({
                type: LOGIN_FAIL,
                payload: alert
            })
        }
    }

    // Logout
    const logoutUser = () => {
         
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                getAuthenticatedUser,
                loginUser,
                logoutUser 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;