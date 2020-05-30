import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';


export default function App() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    const url = 'http://localhost:5000/api/login';
    const { data } = await Axios.post(url, {username, password});
    
    setUser(data.data);
  }

  const register = async (username, password) => {
    const url = 'http://localhost:5000/api/users';
    const { data } = await Axios.post(url, {username, password});
    
    setUser(data.data);
     
  } 

  const logout = () => {
    setUser(null);
  }


  return (
    <Router>
      <LogoutRoutes login={login} register={register} />
      <div>{JSON.stringify(user)}</div>
    </Router>
    
  );
}

function LoginRoutes(){

}

function LogoutRoutes({login, register}){
  return (
    <Switch>
        <Route 
        path='/register'
        render={(props) => <Register {...props}  register={register}/>}>
      </Route>
      <Route 
        render={(props) => <Login {...props} login={login} />}>
      </Route>
    
    </Switch>
  );
}


// <Router>
    //   <Switch>
    //     <Route exact path="/" component={Login} />
    //     <Route exact path="/register" component={Register} />
    //     <Route exact path="/chat" component={Chat} />
    //   </Switch>
    // </Router>