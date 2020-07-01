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
        case DELETE_MESSAGE:
            return {
                ...state, 
                messages: state.messages.filter(message => message.id !== action.payload)
            }

        case UPDATE_MESSAGE:
        case MESSAGE_STATE:
            return {
                ...state, 
                messages: state.messages.map(message => message.id === action.payload.id ? 
                    action.payload : message)
            }

        case CURRENT_MESSAGE:
            return {
                ...state, 
                selectedmessage: action.payload
            }

        case CLEAN_MESSAGE:
            return {
                ...state, 
                selectedmessage: null
            }

        default:
            return state;
    }
}