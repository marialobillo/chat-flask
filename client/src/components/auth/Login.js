import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';


const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, loginUser } = authContext;


    useEffect( () => {
        if(authenticated){
            props.history.push('/channels')
        }
        if(message){
           showAlert(message.message, message.category); 
        }
    }, [message, authenticated, props.history]);


    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const {username, password} = user;

    const onChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();

        // Validation
        if(username.trim() === '' || password.trim() === ''){
            showAlert('All fields are required. Please try again.', 'alert-danger');
        }

        // To action
        loginUser({username, password});
    }
    return (
        <div className="container text-center">
            { alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
            <div className="login-panel">
                <h1>Login</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your Username..."
                            onChange={onChange}
                            className="form-control"
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password..."
                            onChange={onChange}
                            className="form-control"
                            value={password}
                        />
                    </div>

                    <div className="from-group">
                        <input 
                            type="submit" 
                            className="btn btn-block btn-success"
                            value="Login"
                        />
                    </div>
                </form>

                <Link to={'/register'} className="">
                    Get a New Account
                </Link>
            </div>
        </div>
    );
}

export default Login;