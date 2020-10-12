import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from './routes/home';
import Feed from './routes/feed';
import Login from './routes/login';
import Register from './routes/register';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
