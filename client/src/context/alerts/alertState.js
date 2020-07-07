import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';

import {
    SHOW_ALERT, 
    HIDE_ALERT
} from '../../types';


const AlertState = props => {

    return (
        <alertContext.Provider
            value={{

            }}
        >

        </alertContext.Provider>
    );
}

export default AlertState;