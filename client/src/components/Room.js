import React from 'react';

const Room = ({messages}) => {

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

export default Room;