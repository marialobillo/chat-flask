import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ChannelList from './ChannelList';

const Dashboard = () => {

    const [channels, setChannels] = useState([])

    useEffect( () => {
        const loadChannels = async () => {
            const url = 'http://localhost:5000/api/channels';
            const { data } = await Axios.get(url);
        
            setChannels(data.data);
            console.log('channels en dashboard', data.data);
        }

        loadChannels();
    }, []);
    

    return(
        <div className="container">
            <h2 className="text-center">Chat</h2>
            <ChannelList channels={channels}  />
        </div>

    )
}

export default Dashboard;