import React from 'react';

const Channel = ({channel}) => {
    return (
        <div className="btn btn-info">
            #{channel.name}
        </div>
    );
}

export default Channel;