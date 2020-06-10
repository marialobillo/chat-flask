import React, { useState } from 'react';
import Axios from 'axios';

import Channel from './Channel';
import Messages from './Messages';

const Channels = ({channels}) => {

    const [currentChannel, setCurrentChannel] = useState('');
    const [messages, setMessages] = useState(null);  
    const [message, setMessage] = useState(''); 
    
    const handleClick = async (channel) => {

        const url = 'http://localhost:5000/api/bychannel/' + channel.id;
        const { data } = await Axios.get(url);

        setCurrentChannel(channel)
        setMessages(data.data)
    }

    const handleChange = event => {

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
                <li key={channel.id}>
                    <Channel 
                        channel={channel}
                        handleClick={handleClick} 
                    />
                </li>
            ))}
            </ul>

            <div className="message-panel col-md-8">
                <div className="panel">
            <h4>{messages
                ? 
                    (currentChannel.name + ' Channel') 
                : 
                    null
                }
                </h4>
                    {messages ? 
                        (<Messages messages={messages} />)
                    :
                        <span>Please, click in a channel and start chatting!</span>    
                    }
                </div>

                { messages ? 
                    (<div className="row">
                        <form 
                            className="form-row col-md-12 ml-3"
                        >
                            <div className="col-auto ">
                                <input 
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={message}
                                ></input>
                            </div>
                            <div className="col-auto ">
                                <button 
                                    type="submit"
                                    className="btn btn-block btn-primary"
                                    onClick={handleMessage}
                                >Send New Message
                                </button>
                            </div>
                        </form>
                    </div>)
                :
                    null
                }


            </div>

            
        </div>
    );
}

export default Channels;

