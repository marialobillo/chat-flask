import React from 'react';
import NewChannel from '../channels/NewChannel';

const Sidebar = () => {
    return (
        <aside>
            <header className="header">
                <nav className="navbar navbar-toggleable-md pt-0 pb-0 ">

                <NewChannel />
            


                <div className="channels">
                    <h5>Channels</h5>

                </div>
          
            </nav>
        </header>
        </aside>
    );
}

export default Sidebar;