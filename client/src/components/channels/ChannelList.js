import React, { useContext, useEffect } from 'react';
import Channel from './Channel';
import channelContext from '../../context/channels/channelContext';

const ChannelList = () => {


    const channelsContext = useContext(channelContext);
    const { channels, getChannels } = channelsContext;

    useEffect( () => {
        getChannels();

        // eslint-disable-next-line
    }, [])

    if(channels === 0) return <p>There is no Channels</p>;

    return (
        <ul className="channel-list">
            {channels.map(channel => (
               <Channel
                    key={channel.id} 
                    channel={channel}
               /> 
            ))}
        </ul>
    );
}

export default ChannelList;