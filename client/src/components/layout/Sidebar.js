import React from 'react';
import NewChannel from '../channels/NewChannel';
import ChannelList from '../channels/ChannelList';

const Sidebar = () => {
    return (
        <aside className="col-3">
            <header className="header">
                <nav className="navbar navbar-toggleable-md pt-0 pb-0 ">

                <NewChannel />

                <div className="channels">
                    <h5>Channels</h5>

                    <ChannelList />

                </div>
          
            </nav>
        </header>
        </aside>
    );
}

export default Sidebar;