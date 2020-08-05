import React, { useReducer } from 'react';

import channelContext from './channelContext';
import channelReducer from './channelReducer';

import {
    FORM_CHANNEL,
    GET_CHANNELS,
    ADD_CHANNEL,
    FORM_VALIDATION,
    CURRENT_CHANNEL,
    DELETE_CHANNEL
} from '../../types';

import axiosClient from '../../config/axios';



const ChannelState = props => {

    const initialState = {
        channels: [],
        channelForm: false,
        formerror: false,
        channel: null
    }

    // dispatch for actions
    const [state, dispatch] = useReducer(channelReducer, initialState)

    // function for CRUD
    const showForm = () => {
        dispatch({
            type: FORM_CHANNEL
        })
    }

    const getChannels = async () => {
        try {
            const response = await axiosClient.get('/api/channels');
            dispatch({
                type: GET_CHANNELS,
                payload: response.data.data
            });     
        } catch (error) {
            console.log(error);
        }
    }

    const addChannel = async channel => {

        try {
            const response = await axiosClient.post('/api/channels', channel);
            // add project to the state 
            dispatch({
                type: ADD_CHANNEL,
                payload: response.data.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const showError = () => {
        dispatch({
            type: FORM_VALIDATION,

        })
    }

    const currentChannel = channelId => {
        dispatch({
            type: CURRENT_CHANNEL,
            payload: channelId
        })
    }

    const deleteChannel = channelId => {
        dispatch({
            type: DELETE_CHANNEL,
            payload: channelId
        })
    }

    return (
        <channelContext.Provider
            value={{
                channels: state.channels,
                channelForm: state.channelForm,
                formerror: state.formerror,
                channel: state.channel,
                showForm,
                getChannels,
                addChannel,
                showError,
                currentChannel,
                deleteChannel
            }}
        >
            {props.children}
        </channelContext.Provider>
    )
}

export default ChannelState;