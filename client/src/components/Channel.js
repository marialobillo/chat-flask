import React, { useState } from 'react';

const Channel = ({channel}) => {

    console.log('llegamos al channel single')

    const handleClick = (channel_id) => {
        
        
    }
    return (
        <div className="container" >
            <span 
                className="btn btn-block btn-primary channel-item" 
                onClick={() => handleClick(channel.id)}
            >
                #{channel.name}
            </span>
            <br/>
        </div>
    );
}

export default Channel;













