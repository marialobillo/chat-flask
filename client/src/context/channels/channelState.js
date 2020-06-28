import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';


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

const channels = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'TDD'}
]

const ChannelState = props => {
    
    const initialState = {
        channels : [],
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

    const getChannels = () => {
        dispatch({
            type: GET_CHANNELS,
            payload: channels
        })
    }

    const addChannel = channel => {
        channel.id = uuidv4();
        // add project to the state 
        dispatch({
            type: ADD_CHANNEL, 
            payload: channel
        })
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
                showform: showform,
                formerror: state.formerror,
                channel: state.channel,
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