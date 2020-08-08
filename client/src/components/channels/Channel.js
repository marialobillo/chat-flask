import React, { useContext } from 'react';
import channelContext from '../../context/channels/channelContext';
import messageContext from '../../context/messages/messageContext';

const Channel = ({ channel }) => {

    const channelsContext = useContext(channelContext);
    const { currentChannel } = channelsContext;

    // // get the function of context task
    const messagesContext = useContext(messageContext);
    const { getMessages } = messagesContext;

    // function for add current project
    const selectChannel = id => {
        currentChannel(id); // Set the current project
        getMessages(id); // Filter tasks when on Click
    }

    return (
        <li>
            <button
                type="button"
                className="channel-item"
                onClick={ () => selectChannel(channel.id) }
            >
                #{channel.name}
            </button>
        </li>

    );
}

export default Channel;