import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Channels from './Channels';
import Navbar from './Navbar';

const Dashboard = ({user}) => {

    const [channels, setChannels] = useState([]);
    
    useEffect( () => {
        const loadChannels = async () => {
            const url = 'http://localhost:5000/api/channels';
            const { data } = await Axios.get(url);
        
            setChannels(data.data);
        }

        loadChannels();        
    }, []);

    return(
        <div className="">
            <Navbar />
            
            <aside className="container">
                <Channels channels={channels} user={user} />
            </aside>
        </div>

    )
}

export default Dashboard;