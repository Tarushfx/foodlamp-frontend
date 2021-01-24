import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./routes/home";
import Feed from "./routes/feed";
import Login from "./routes/login";
import Register from "./routes/register";
import Logout from "./routes/logout";
import authService from "./services/authService";
import { loadData } from "./services/feedService";

// const data = loadData();
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    let reqData = async () => await loadData();
    console.log(reqData, 123);
    if (data) setData(reqData);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/feed">
          <Feed data={data} />
        </Route>
        <Route exact path="/login">
          {authService.getToken() ? (
            () => {
              alert("You are already logged in");
              return <Redirect to="/feed" />;
            }
          ) : (
            <Login data={data} />
          )}
        </Route>
        <Route exact path="/logout">
          <Logout data={data} />
        </Route>
        <Route exact path="/register">
          <Register data={data} />
        </Route>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Redirect from="/" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
