import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Channels from './Channels';
import Navbar from './Navbar';
// import Messages from './Messages';

const Dashboard = () => {

    const [channels, setChannels] = useState([]);
    
    useEffect( () => {
        const loadChannels = async () => {
            const url = 'http://localhost:5000/api/channels';
            const { data } = await Axios.get(url);
        
            setChannels(data.data);
        }

        // const getMessages = async () => {

        //     if(currentChannel){
        //         const url = 'http://localhost:5000/api/bychannel/' + currentChannel ;
        //         const { data } = await Axios.get(url);  
        //         setMessages(data.data);   
        //     }
    
        // }

        loadChannels();

        // getMessages();
        
    }, []);

    

    
    return(
        <div className="">
            <Navbar />
            
            <aside className="container">
                <Channels channels={channels}  />
            </aside>
            
        
            
        </div>

    )
}

export default Dashboard;