import React, { useState } from 'react';

const Channel = ({channel, handleClick, currentChannel}) => {

    return (
        <div className="container" >
            <div 
                className="btn btn-block btn-primary channel-item" 
                onClick={() => handleClick(channel)}
            >
                {channel.name}
            </div>
            
            
        </div>
    );
}

export default Channel;













