import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    // state
    const [user, setUser] = useState({
        username:'',
        password: ''
    });

    const {username, password } = user; 

    const handleChange = (event) => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // validation


    }

    return (
        <div className="text-center">
            <div className="login-panel">
                <h1>Login</h1>

                <form className="form-login" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="username"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Your Username"
                            onChange={handleChange}
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            onChange={handleChange}
                            value={password}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block"
                            value="Login"
                        />
                    </div>
                </form>

                <Link to={'/register'} className="">
                    Create an Account
                </Link>
            </div>
        </div>
    );
}

export default Login;