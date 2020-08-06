import React from 'react';

const Message = ({message}) => {

    
    return (
        <li className="message" key={message.id}>
            <span>{message.content}</span>
        </li>
    );
}

export default Message;