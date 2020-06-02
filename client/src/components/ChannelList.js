import React from 'react';
import Channel from './Channel';

const ChannelList = ({channels}) => {
    console.log('En channel list', channels);
    return (
        <div>
            <h2>Chanel List</h2>

            {channels.map(channel => (
                <Channel channel={channel} />
            ))}
        </div>
    );
}

export default ChannelList;