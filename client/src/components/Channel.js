import React, { useState } from 'react';

const Channel = ({channel}) => {

    console.log('llegamos al channel single')

    const handleClick = (channel_id) => {
        
        
    }
    return (
        <div className="" >
            <span 
                key={channel.id}
                className=" btn btn-block btn-primary" 
                onClick={() => handleClick(channel.id)}
            >
                #{channel.name}
            </span>

        </div>
    );
}

export default Channel;













