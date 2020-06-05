import React from 'react';

const Messages = ({messages}) => {

    console.log('en Messages', messages)
    return (
        <div>
            {messages.map(message => (
                <div className="row" key={message.id}>
                    {message.content}
                    </div>
            ))}
        </div>
    );
}

export default Messages;