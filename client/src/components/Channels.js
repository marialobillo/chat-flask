import React from 'react';
import Channel from './Channel';

const Channels = ({channels}) => {
    
    return (
        <div className="channel-panel">
            <h4>Channels</h4>

            <ul className="">
            {channels.map(channel => (
                <li>
                    <Channel 
                        key={channel.id} 
                        channel={channel} 
                    />
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Channels;

