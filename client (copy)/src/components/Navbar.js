import React from 'react';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Chat</a>
           
            <div className="nav-item">
                <a className="right">Logout</a>
            </div>
        </nav>
    )
}
export default Header;