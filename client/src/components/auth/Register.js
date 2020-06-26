import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirm: ''
    });

    const { username, password, confirm} = user;

    const onChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();

        // Validation

        // password min 6 char

        // cofirm and password equal

        // To action
    }
    return (
        <div className="container text-center">
            <div className="login-panel">
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
                        <label hrmlFor="password">Password</label>
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
                        <label hrmlFor="confirm">Confirm Password</label>
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
    );
}

export default Register;