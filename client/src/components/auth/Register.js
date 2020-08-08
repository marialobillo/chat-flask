import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext;

    useEffect(() => {
        if (authenticated) {
            props.history.push('/channels')
        }
        if (message) {
            showAlert(message.message, message.category);
        }
        //eslint-disable-next-line
    }, [message, authenticated, props.history]);

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirm: ''
    });

    const { username, password, confirm } = user;

    const onChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();

        // Validation
        if (username.trim() === '' ||
            password.trim() === '' ||
            confirm.trim() === '') {
            showAlert('All fields are required.', 'alert-danger');
        }

        // password min 6 char
        if (password.length < 6) {
            showAlert('Password must be 6 chars minimum', 'alert-danger');
            return;
        }
        // cofirm and password equal
        if (password !== confirm) {
            showAlert('Password are not equal', 'alert-danger');
            return;
        }

        // To action
        registerUser({
            username,
            password
        })
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand" href="#">ChatApp </span>
                <div className="collapse navbar-collapse" id="navbarColor01">
                </div>
            </nav>
            <div className="container text-center panel panel-default">
                {alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
                <div className="login-panel panel-body">
                    <h1>Register</h1>

                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
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

                        <div className="form-group">
                            <label htmlFor="confirm">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm"
                                name="confirm"
                                placeholder="Please, repeat your Password..."
                                onChange={onChange}
                                className="form-control"
                                value={confirm}
                            />
                        </div>

                        <div className="from-group">
                            <input
                                type="submit"
                                className="btn btn-block btn-success"
                                value="Register"
                            />
                        </div>
                    </form>

                    <Link to={'/'} className="">
                        Login
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;