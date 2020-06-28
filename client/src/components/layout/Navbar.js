import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
            <span className="navbar-brand" href="#">ChatAPP </span>      
  
            <div className="collapse navbar-collapse" id="navbarColor01">
        
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <span className="nav-link" href="#">Hi, User</span>
                    </li>
                
                    
                </ul>

                <ul className="navbar-nav mr-auto right">


                    <li className="nav-item right">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
    
            </div>
        </nav>
    );
}

export default Nav;