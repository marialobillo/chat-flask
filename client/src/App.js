import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';
// import Error from './components/Error';


export default function App() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState('no pude cargar feed');
  const [channels, setChannels] = useState([]);

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

  const getChannels = async () => {
    const url = 'http://localhost:5000/api/channels';
    const { data } = await Axios.get(url);

    setChannels(data.data);
    console.log('channels en app', channels);
  }

 
  const logout = () => {
    setUser(null);
  }

  const showError = (message) => {
    setError(message);
  }

  getChannels();


  return (
    <Router>

 
      { user ? 
        (<LoginRoutes channels={channels} />) 
      : 
        (<LogoutRoutes login={login} register={register}/>)
      }
      <div>{JSON.stringify(user)}</div>
    </Router>
    
  );
}

function LoginRoutes({ channels}){
  return (
    <Switch>
      <Route 
        path='/'
        render={(props) => <Chat {...props} 
         channels={channels}/>}>
        </Route>
              
    </Switch>
  );
}

function LogoutRoutes({login, register}){
  return (
    <Switch>
      <Route 
        path='/login'
        render={(props) => <Login {...props} 
        login={login} />}>
      </Route>
      <Route 
        render={(props) => <Register {...props}  
        register={register} default />}>
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