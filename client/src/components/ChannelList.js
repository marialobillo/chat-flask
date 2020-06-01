import React from 'react';
import Channel from './Channel';

const ChannelList = ({channelList}) => {
    return (
        <div>
            <h2>Chanel List</h2>

            {channelList.map(channel => (
                <Channel channel={channel} />
            ))}
        </div>
    );
}

export default ChannelList;