import React, { useReducer } from 'react';
import MessageContext from './messageContext';
import MessageReducer from './messageReducer';

import { 
    MESSAGES_CHANNEL,
    ADD_MESSAGE,
    MESSAGE_VALIDATION,
    DELETE_MESSAGE,
    MESSAGE_STATE,
    CURRENT_MESSAGE,
    UPDATE_MESSAGE,
    CLEAN_MESSAGE 
} from '../../types';

import axiosClient from '../../config/axios';


const MessageState = props => {
    const initialState = {
        messageschannel: [],
        errormessage: false,
        selectedmessage: null
    }

    // create dispatch and state
    const [state, dispatch] = useReducer(MessageReducer, initialState);


    // Get the task from a project
    const getMessages = async channelId => {
        
        try {
            const response = await axiosClient.get(`/api/bychannel/${channelId}`); 
            dispatch({
                type: MESSAGES_CHANNEL,
                payload: response.data.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    // add a task
    const addMessage = async message => {
        try {
            const response = await axiosClient.post('/api/messages', message);
            dispatch({
                type: ADD_MESSAGE, 
                payload: message
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Valida y muestra un error en caso de que sea necesario
    const messageValidation = () => {
        dispatch({
            type: MESSAGE_VALIDATION
        })
    }

    // eliminar tarea por id
    const deleteMessage = id => {
        dispatch({
            type: DELETE_MESSAGE,
            payload: id
        })
    }

   

    const saveCurrentMessage = message => {
        dispatch({
            type: CURRENT_MESSAGE,
            payload: message
        })
    }

    // UPDATE TASK
    const updateMessage = message => {
        dispatch({
            type: UPDATE_MESSAGE,
            payload: message
        })
    }

    // CLEAN TASK
    const cleanMessage = () => {
        dispatch({
            type: CLEAN_MESSAGE
        })
    }

    return (
        <MessageContext.Provider
            value={{
                messageschannel: state.messageschannel,
                errormessage: state.errormessage,
                selectedmessage: state.selectedmessage,
                getMessages,
                addMessage,
                messageValidation,
                deleteMessage,
                saveCurrentMessage,
                updateMessage,
                cleanMessage
            }}
        >
            {props.children}
        </MessageContext.Provider>
    )
}

export default MessageState;