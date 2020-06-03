import React from 'react';
import Channel from './Channel';

const ChannelList = ({channels}) => {
    
    return (
        <div className="login-panel">
            <h4>Channels</h4>

            {channels.map(channel => (
                <Channel key={channel.id} channel={channel} />
            ))}
        </div>
    );
}

export default ChannelList;