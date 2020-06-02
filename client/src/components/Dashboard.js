import React, { useState } from 'react';
import Axios from 'axios';
import ChannelList from './ChannelList';

const Dashboard = () => {

    const [channels, setChannels] = useState([])

    const getChannels = async () => {
        const url = 'http://localhost:5000/api/channels';
        const { data } = await Axios.get(url);
    
        setChannels(data.data);
        console.log('channels en app', channels);
      }

    return(
        <div className="">
            <h2>Here the Chat</h2>
            <ChannelList channels={channels} />
        </div>

    )
}

export default Dashboard;