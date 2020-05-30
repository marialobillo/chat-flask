import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Login = ({ login }) => {

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
        try {
            login(user.username, user.password);        
        } catch (error) {
            console.log(error);
        }
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

                <p>
                    Create an Account&nbsp; 
                    <Link to={'/'} className="">
                        here.
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;