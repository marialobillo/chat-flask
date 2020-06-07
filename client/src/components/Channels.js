import React, { useState } from 'react';
import Axios from 'axios';

import Channel from './Channel';
import Messages from './Messages';

const Channels = ({channels}) => {

    const [currentChannel, setCurrentChannel] = useState(null);
    const [messages, setMessages] = useState(null);  
    const [message, setMessage] = useState(null); 
    
    const handleClick = async (channel_id) => {

        const url = 'http://localhost:5000/api/bychannel/' + channel_id;
        const { data } = await Axios.get(url);

        setCurrentChannel(channel_id)
        setMessages(data.data)
    }

    const handleChange = event => {

        console.log(event.target.value);
        setMessage(event.target.value);
    }

    const handleMessage = (event) => {
        event.preventDefault()
        console.log(message)
    }

    
    return (
        <div className="row">
            

            <ul className="channel-panel col-md-3 ">
            <h4>Channels</h4>
            {channels.map(channel => (
                <li className="channel-item" key={channel.id}>
                    <Channel 
                        channel={channel}
                        handleClick={handleClick} 
                    />
                </li>
            ))}
            </ul>

            <div className="message-panel col-md-8">
                <div className="panel">
                    <h4>Messages</h4>
                    {messages ? 
                        (<Messages messages={messages} />)
                    :
                        <span>Please, click in a channel and start chatting!</span>    
                    }
                </div>

                <div className="row">
                    <form 
                        className="form-row col-md-12 ml-3"
                    >
                        <div className="col-auto ">
                            <input 
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="col-auto ">
                            <button 
                                type="submit"
                                className="btn btn-block btn-primary"
                                onClick={handleMessage}
                            >Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            
        </div>
    );
}

export default Channels;

