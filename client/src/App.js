import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Channels from './components/channels/Channels';

import ChannelState from './context/channels/channelState';
import MessageState from './context/messages/messageState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ChannelState>
      <MessageState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/channels" component={Channels} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </MessageState>
    </ChannelState>
  );
}

export default App;
