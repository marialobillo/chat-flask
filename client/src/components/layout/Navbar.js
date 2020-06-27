import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
            <a className="navbar-brand" href="#">Hi </a>      
  
            <div className="collapse navbar-collapse" id="navbarColor01">
        
                <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
                </ul>
    
            </div>
        </nav>
    );
}

export default Nav;