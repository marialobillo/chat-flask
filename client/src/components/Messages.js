import React from 'react';
import Message from './Message';

const Messages = ({messages}) => {

    return (
        <div>
            {messages.map(message => (
                <div className="row" key={message.id}>
                    <Message message={message} />
                </div>
            ))}
        </div>
    );
}

export default Messages;