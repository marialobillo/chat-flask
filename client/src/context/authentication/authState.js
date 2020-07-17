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

        if(state.authenticated){

        }

        try {
            const response = await axiosClient.get(`/api/users/${state.user.id}`);
            console.log('Response login: ', response.data.data.id);
            const id = response.data.data.id;
            dispatch({
                type: GET_USER, 
                payload: id
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
           console.log('Login Response', response.data.data);
            const id = response.data.data.id;
           dispatch({
               type: LOGIN_DONE,
               payload: id
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

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
                getAuthenticatedUser,
                loginUser 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;