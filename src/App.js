import './App.css'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'
import Messages from './Messages'
import Settings from './Settings'
import Register from './Register'
import React, { useState } from 'react'
import HistorySMS from './HistorySMS'
import ThankYou from './ThankYou'
import EmailConfirmed from './EmailConfirmed'
import ResetPassword from './ResetPassword'
import Forgot from './Forgot'

function App() {
 
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path='/thank-you'>
            <ThankYou />
          </Route>
          <Route path='/email-confirmed'>
            <EmailConfirmed />
          </Route>
          <Route path='/reset-password'>
            <ResetPassword />
          </Route>
          <Route path='/forgot'>
            <Forgot />
          </Route>
        <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/sms-history'>
            
            <Sidebar />
            <div className="app__wrapper">
              <Header />
              <HistorySMS />
            </div>
          </Route>
          <Route path='/dashboard'>
            <Sidebar />
            <div className="app__wrapper">
              <Header selected="Dashboard" />
              <Dashboard />
            </div>
          </Route>
          <Route path='/messaging-center'>
            <Sidebar />
            <div className="app__wrapper">
              <Header selected="Messaging Center" />
              <Messages />
            </div>
          </Route>
          <Route path='/settings'>
            <Sidebar />
            <div className="app__wrapper">
              <Header selected="Settings" />
              <Settings />
            </div>
          </Route>
          <Route path='/'>
            <Sidebar />
            <div className="app__wrapper">
              <Header />
              <Dashboard />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
