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
    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK, 
            payload: task
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const taskValidation = () => {
        dispatch({
            type: TASK_VALIDATION
        })
    }

    // eliminar tarea por id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    //  change the state of every task
    const changeTaskState = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }

    // EXTRAE UNA TARA PARA EDICION
    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    // UPDATE TASK
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    // CLEAN TASK
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                selectedtask: state.selectedtask,
                getTasks,
                addTask,
                taskValidation,
                deleteTask,
                changeTaskState,
                saveCurrentTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;