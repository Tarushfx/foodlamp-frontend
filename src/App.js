import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./routes/home";
import Feed from "./routes/feed";
import Login from "./routes/login";
import Register from "./routes/register";
import Logout from "./routes/logout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect from="/" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
