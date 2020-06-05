import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ChannelList from './ChannelList';
import Messages from './Messages';

const Dashboard = () => {

    const [channels, setChannels] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentChannel, setCurrentChannel] = useState(null);

    useEffect( () => {
        const loadChannels = async () => {
            const url = 'http://localhost:5000/api/channels';
            const { data } = await Axios.get(url);
        
            setChannels(data.data);
        }

        const getMessages = async () => {

            if(currentChannel){
                const url = 'http://localhost:5000/api/bychannel/' + currentChannel ;
                const { data } = await Axios.get(url);  
                setMessages(data.data);   
            }
    
        }

        loadChannels();

        getMessages();
        
    }, []);

    

    
    return(
        <div className="container">
            <h2 className="text-center">Chat</h2>
            <ChannelList 
                channels={channels}  
                setCurrentChannel={setCurrentChannel}
            />
            {console.log('DASHBOARD', currentChannel)}
            {currentChannel ? <Messages messages={messages}/> : null}
        </div>

    )
}

export default Dashboard;