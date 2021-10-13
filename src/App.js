import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Preferences from './components/Preferences/Preferences';

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  window.location.href="/";
}

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Bienvenido</h1>
      <a href="/dashboard" >
        Dashboard
      </a>
      <a href="/preferences" >
        Preferencias
      </a>
      <a href="/logout" >
        Cerrar sesión
      </a>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
