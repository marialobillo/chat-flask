import React from 'react';
import NewChannel from '../channels/NewChannel';
import ChannelList from '../channels/ChannelList';

const Sidebar = () => {
    return (
        <aside className="col-3 aside">
            <header className="header">
                <nav className="navbar navbar-toggleable-md pt-0 pb-0 ">

                <NewChannel />

                <div className="channels">
                    <h5 className="channel-title text-center">Channels</h5>

                    <ChannelList />

                </div>
          
            </nav>
        </header>
        </aside>
    );
}

export default Sidebar;