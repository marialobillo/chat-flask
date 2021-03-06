import React, { useContext, useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';

const Nav = () => {

    // User
    const authContext = useContext(AuthContext);
    const { user, getAuthenticatedUser, logoutUser } = authContext;

    useEffect( () => {
        getAuthenticatedUser();

        //eslint-disable-next-line
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
            <span className="navbar-brand" href="#">ChatAPP </span>      
  
            <div className="collapse navbar-collapse" id="navbarColor01">
        
                
                <ul className="navbar-nav mr-auto">

                    {user ? 
                        <li className="nav-item">
                            <span className="nav-link" href="#">Welcome, { user.username }</span>
                        </li>
                                        
                    : null}
                
                    
                </ul>

                <ul className="navbar-nav right">


                    <li className="nav-item">
                        <button 
                            className="btn btn-blank text-white"
                            onClick={() => logoutUser()}                            
                            >
                            Logout
                        </button>

                    </li>
                </ul>
    
            </div>
        </nav>
    );
}

export default Nav;