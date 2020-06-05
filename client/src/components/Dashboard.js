import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ChannelList from './ChannelList';

const Dashboard = () => {

    const [channels, setChannels] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentChannel, setCurrentChannel] = useState(null);

    useEffect( () => {
        const loadChannels = async () => {
            const url = 'http://localhost:5000/api/channels';
            const { data } = await Axios.get(url);
        
            setChannels(data.data);
            console.log('channels en dashboard', data.data);
        }

        loadChannels();
    }, []);

    const getMessages = async (channel_id) => {
        const url = 'http://localhost:5000/api/bychannel/' + channel_id ;
        const { data } = await Axios.get(url); 

        setMessages(data.data);
    }

    const selectChannel = () => {

    }
    

    return(
        <div className="container">
            <h2 className="text-center">Chat</h2>
            <ChannelList channels={channels}  />
            <Messages />
        </div>

    )
}

export default Dashboard;