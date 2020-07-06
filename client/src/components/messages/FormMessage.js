import React, { useContext, useState, useEffect } from 'react';
import channelContext from '../../context/channels/channelContext';
import messageContext from '../../context/messages/messageContext';

const FormMessage = () => {

    const channelsContext = useContext(channelContext);
    const { channel } = channelsContext;

    const messagesContext = useContext(messageContext);
    const { errormessage, addMessage, messageValidation,
        getMessages } = messagesContext;

    

    // state del form 
    const [message, setMessage] = useState({
        content: '',

    })

    // get the content from message
    const { content } = message;

    if(!channel) return null;

    const [currentChannel] = channel;

    // Read the values of the form
    const handleChange = event => {
        setMessage({
            ...message, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        // // Validation
        if(content.trim() === ''){
            messageValidation();
            return;
        }

       
        message.channel_id = currentChannel.id;
        addMessage(message);
        

        // // get the tasks and filter by current project
        getMessages(currentChannel.id)

        // // reiniciar el form
        setMessage({
            content: ''
        })
    }

    return (
        <div className="col-md-12">
            <form 
                className="form" 
                onSubmit={handleSubmit} 
            >
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Write something..."
                        name="content"
                        value={content}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Add Message"
                    />
                </div>
            </form>
            {errormessage ? 
            (<p className="alert alert-danger">
                Maybe, you forgot typing your message?...Try again
            </p>) 
            : null}
        </div>
    );
}

export default FormMessage;