import React from 'react';

const Channel = ({channel}) => {
    return (
        <div className="">
                        <h2>Channel</h2>

            {channel.name}
        </div>
    );
}

export default Channel;