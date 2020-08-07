import React from 'react';
// import axiosClient from '../../config/axios';

const Message = ({message}) => {

    
    return (
        <li key={message.id}>
           <div className="message">
                <span> <strong>{message.username}: </strong></span>
                <span>{message.content}</span>
                <div>{message.created_at}</div>
            </div>
        </li>
    );
}

export default Message;