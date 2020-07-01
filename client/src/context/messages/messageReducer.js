import { 
    MESSAGES_PROJECT,
    ADD_MESSAGE,
    MESSAGE_VALIDATION,
    DELETE_MESSAGE,
    MESSAGE_STATE,
    CURRENT_MESSAGE,
    UPDATE_MESSAGE,
    CLEAN_MESSAGE 
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case MESSAGES_PROJECT:
            return {
                ...state,
                messageschannel: state.messages.filter(message => message.channel_id === action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state, 
                messages: [...state.messages, action.payload],
                errormessage: false
            }

        case MESSAGE_VALIDATION:
            return {
                ...state,
                errormessage: true
            }
        case DELETE_TASK:
            return {
                ...state, 
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case UPDATE_TASK:
        case TASK_STATE:
            return {
                ...state, 
                tasks: state.tasks.map(task => task.id === action.payload.id ? 
                    action.payload : task)
            }

        case CURRENT_TASK:
            return {
                ...state, 
                selectedtask: action.payload
            }

        case CLEAN_TASK:
            return {
                ...state, 
                selectedtask: null
            }

        default:
            return state;
    }
}