import React from 'react';
import ChannelList from './ChannelList';

const Dashboad = () => {

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