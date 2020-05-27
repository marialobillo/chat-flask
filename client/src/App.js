import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';


function App() {

  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const url = 'http://localhost:5000/api/login';
    const { data, success } = await Axios.post(url, { username, password });
    
    if(success){
      setUser(data)
      console.log(user);
    }
  }

  const register = async (username, password) => {
    const url = 'http://localhost:5000/api/users';
    const { data, success} = await Axios.post(url, {username, password})
  
    if(success){
      setUser(data);
      console.log(user);
    }
  } 

  const logout = () => {
    setUser(null);
  }


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
