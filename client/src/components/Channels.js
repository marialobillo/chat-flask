import React from 'react';
import Channel from './Channel';

const Channels = ({channels}) => {
    
    return (
        <div className="row">
            

            <ul className="channel-panel col-md-3 ">
            <h4>Channels</h4>
            {channels.map(channel => (
                <li className="channel-item" key={channel.id}>
                    <Channel 
                        channel={channel} 
                    />
                </li>
            ))}
            </ul>

            <div className="message-panel col-md-8">
                <div className="panel">
                    <h4>Messages</h4>
                </div>
            </div>
        </div>
    );
}

export default Channels;

