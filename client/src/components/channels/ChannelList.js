import React, { useContext, useEffect } from 'react';
import Channel from './Channel';
// import projectContext from '../../context/projects/projectContext';

const ChannelList = () => {

    const channels = [
        { name: 'General'},
        { name: 'Javascript'},
        { name: 'React.js'},
        { name: 'Python'},
    ]

    // const projectsContext = useContext(projectContext);
    // const { projects, getProjects } = projectsContext;

    useEffect( () => {
        // getChannels();

        // eslint-disable-next-line
    }, [])

    if(channels === 0) return <p>There is no Channels</p>;

    return (
        <ul className="channel-list">
            {channels.map(channel => (
               <Channel
                    // key={channel.id} 
                    channel={channel}
               /> 
            ))}
        </ul>
    );
}

export default ChannelList;