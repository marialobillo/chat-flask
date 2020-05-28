import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';


function App() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    const url = 'http://localhost:5000/api/login';
    const { data } = await Axios.post(url, {username, password});
    
    setUser(data.user);
  }

  const register = async (username, password) => {
    const url = 'http://localhost:5000/api/users';
    const { data } = await Axios.post(url, {username, password})
  
    setUser(data.user);
     
  } 

  const logout = () => {
    setUser(null);
  }


  return (
    <div className="">
      {/* <Login login={login} /> */}
      <Register register={register} />
      <div>{JSON.stringify(user)}</div>
    </div>
    
  );
}

export default App;

// <Router>
    //   <Switch>
    //     <Route exact path="/" component={Login} />
    //     <Route exact path="/register" component={Register} />
    //     <Route exact path="/chat" component={Chat} />
    //   </Switch>
    // </Router>