import React from 'react';
import Message from './Message';
import NewMessageForm from './NewMessageForm';

const Messages = ({messages}) => {

    return (
        <div>
            {messages.map(message => (
                <div className="row" key={message.id}>
                    <Message message={message} />
                </div>
            ))}

            <div className="row">
                { messages.length !== 0 ? 
                    (<div className="row">
                        <NewMessageForm />
                    </div>)
                :
                    null
                }

            </div>
        </div>
    );
}

export default Messages;