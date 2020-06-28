import { 
    FORM_CHANNEL, 
    GET_CHANNELS, 
    ADD_CHANNEL,
    FORM_VALIDATION,
    CURRENT_CHANNEL,
    DELETE_CHANNEL
    } from '../../types';

export default (state, action) => {
    switch(action.type){
        case FORM_CHANNEL:
            return {
                ...state, 
                channelForm: true
            }
        case GET_CHANNELS:
            return {
                ...state, 
                channels: action.payload
            }

        case ADD_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, action.payload],
                channelForm: false,
                formerror: false
            }

        case FORM_VALIDATION:
            return {
                ...state, 
                formerror: true
            }

        case CURRENT_CHANNEL:
            return {
               ...state, 
               channel: state.channels.filter(channel => channel.id === action.payload) 
            }

        case DELETE_CHANNEL:
            return {
                ...state, 
                channels: state.channels.filter(channel => channel.id !== action.payload),
                channel: null
            }

        default:
            return state;
    }
}