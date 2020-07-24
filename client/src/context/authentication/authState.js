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
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
     

    const registerUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            const user = response.data.data;
            dispatch({
                type: REGISTER_DONE,
                payload: response.data.success
            })
            getAuthenticatedUser(user);
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

    const getAuthenticatedUser = async (authUser) => {

        if(state.authenticated){

        }

        try {
            // const response = await axiosClient.get(`/api/users/${user.id}`);
            // console.log('Getting User Auth: ', response.data.data);
            // const authUser = response.data.data;
            dispatch({
                type: GET_USER, 
                payload: authUser
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
            const authUser = response.data.data;
           dispatch({
               type: LOGIN_DONE,
               payload: authUser.id
           });
           getAuthenticatedUser(authUser);
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