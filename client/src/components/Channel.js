import React, { useState } from 'react';

const Channel = ({channel, setCurrentChannel}) => {

    

    const handleClick = (channel_id) => {
        
        setCurrentChannel(channel_id)
        
    }
    return (
        <div className="btn btn-info" >
            <div 
                className="btn btn-info" 
                onClick={() => handleClick(channel.id)}
            >
                #{channel.name}
            </div>

        </div>
    );
}

export default Channel;













