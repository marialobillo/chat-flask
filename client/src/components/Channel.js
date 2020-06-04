import React, { useState } from 'react';
import Axios from 'axios';
import Room from './Room';

const Channel = ({channel}) => {

    const [messages, setMessages] = useState([]);

    const handleClick = async (id) => {
        setMessages([]);
        const url = 'http://localhost:5000/api/bychannel/' + id ;
        const { data } = await Axios.get(url);

        setMessages(data.data);
        
    }
    return (
        <div className="btn btn-info" onClick={() => handleClick(channel.id)}>
            #{channel.name}

            <Room messages={messages}/>
        </div>
    );
}

export default Channel;













