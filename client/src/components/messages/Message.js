import React, { useContext } from 'react';
// import projectContext from '../../context/projects/projectContext';
// import taskContext from '../../context/tasks/taskContext';

const Message = ({message}) => {

    
    return (
        <li className="message" key={message.id}>
            <span>{message.content}</span>
        </li>
    );
}

export default Message;