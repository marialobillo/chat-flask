import React, { useReducer } from 'react';
import MessageContext from './messageContext';
import MessageReducer from './messageReducer';
import {v4 as uuidv4} from 'uuid';

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


const MessageState = props => {
    const initialState = {
        tasks: [
            { id: 0, content: 'Elegir platarforma', channel_id: 1},
            { id: 1, content: 'Choose colors', channel_id: 2},
            { id: 2, content: 'Do the border', channel_id: 3},
            { id: 3, content: 'Payment platforms', channel_id: 4},
            { id: 4, content: 'Elegir platarforma', channel_id: 2},
            { id: 5, content: 'Choose colors', channel_id: 3},
            { id: 6, content: 'Do the border', channel_id: 4},
            { id: 7, content: 'Payment platforms', channel_id: 1},
            { id: 8, content: 'Elegir platarforma', channel_id: 3},
            { id: 9, content: 'Choose colors', channel_id: 2},
            { id: 11, content: 'The new reality', channel_id: 1}
        ],
        messageschannel: null,
        errormessage: false,
        selectedmessage: null
    }

    // create dispatch and state
    const [state, dispatch] = useReducer(MessageReducer, initialState);


    // Get the task from a project
    const getMessages = channelId => {
        dispatch({
            type: MESSAGES_CHANNEL,
            payload: channelId
        })
    }

    // add a task
    const addMessage = message => {
        message.id = uuidv4();
        dispatch({
            type: ADD_MESSAGE, 
            payload: message
        })
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

    // //  change the state of every task
    // const changeMessageState = task => {
    //     dispatch({
    //         type: TASK_STATE,
    //         payload: task
    //     })
    // }

    // EXTRAE UNA TARA PARA EDICION
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
                messages: state.messages,
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