import React from 'react';
import Moment from 'react-moment';

const Message = ({message}) => {
    
    const {user_id, created_at, content} = message;
    
    const getUsername = async (user_id) => {
        const url = ''
        
    }

    return (

        <div className="row message">
            <div className="row">
                <span className="username">{user_id}</span>
                <span className="created_at">
                    <Moment fromNow>{created_at}</Moment>
                </span>
            </div>
            <div className="row">
                {content}
            </div>
        </div>
    );
}

export default Message;