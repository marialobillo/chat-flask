import React, { useState } from 'react';

const Channel = ({channel, handleClick}) => {

    return (
        <div className="container" >
            <div 
                className="btn btn-block btn-primary channel-item" 
                onClick={() => handleClick(channel.id)}
            >
                {channel.name}
            </div>
            
            
        </div>
    );
}

export default Channel;













