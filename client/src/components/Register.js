import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Register = ({ register }) => {

    // state
    const [user, setUser] = useState({
        username:'',
        password: '',
        confirm: ''
    });

    const {username, password, confirm } = user; 

    const handleChange = (event) => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.password != user.confirm){
            return;
        }
        try {
            register(user.username, user.password);
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div className="text-center">
            <div className="login-panel">
                <h1>Register</h1>

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
                        <label htmlFor="password">Confirm Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm Your password"
                            onChange={handleChange}
                            value={confirm}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block"
                            value="Create New Account"
                        />
                    </div>
                </form>

                <p>
                    Do you already have an account?&nbsp; 
                    <Link to={'/login'} className="">
                        Login
                    </Link>     
                </p>              
            </div>
        </div>
    );
}

export default Register;