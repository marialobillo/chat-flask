import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';


const PrivateRoute = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, getAuthenticatedUser } = authContext;

    useEffect(() => {
        getAuthenticatedUser();
    }, []);

    return (
        <Route { ...props } render={ props => !authenticated ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        ) }
        />
     );
}

export default PrivateRoute;