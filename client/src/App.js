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
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  return (
    <ChannelState>
      <MessageState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/channels" component={Channels} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </MessageState>
    </ChannelState>
  );
}

export default App;
