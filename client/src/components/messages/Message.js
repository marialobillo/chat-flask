import React from 'react';
import moment from 'moment';

const Message = ({message}) => {

    
    return (
        <li key={message.id}>
           <div className="message">
                <div className="row">
                <span className="message-username"> 
                    <strong>{message.username} </strong></span>
                <span className="message-date">
                    {moment(message.created_at).fromNow()}
                </span>

                </div>
               
                <span>{message.content}</span>
                
            </div>
        </li>
    );
}

export default Message;