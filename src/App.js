import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './routes/home';
import Feed from './routes/feed';
import Login from './routes/login';
import Register from './routes/register';
import Logout from './routes/logout';
import Graphs from './routes/graphs';
import authService from './services/authService';
import { loadData, saveTheme } from './services/feedService';
import palette from './css/color';
import Recipe from './routes/recipe.jsx';
import MealPlan from './routes/mealplan';
import Me from './routes/me';
import Likes from './routes/likes.jsx';

function App() {
  const [data, setData] = useState({});
  const [theme, setTheme] = useState(palette[0]);
  const loadAllData = () => {
    const getData = async () => {
      let reqData = await loadData();
      setData(reqData);
      if (reqData) setTheme(palette.filter((element) => element.name == reqData.theme)[0]);
    };
    getData();
  };
  useEffect(loadAllData, []);
  const changeTheme = () => {
    console.log('clicked');
    const index = palette.indexOf(theme);
    console.log(index, palette);
    let newTheme = palette[(index + 1) % palette.length];
    saveTheme(newTheme.name);
    setTheme(newTheme);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/feed">
          <Feed data={data} loadData={loadAllData} theme={theme.color} changeTheme={changeTheme} />
        </Route>
        <Route exact path="/login">
          {authService.getToken() ? (
            () => {
              alert('You are already logged in');
              return <Redirect to="/feed" />;
            }
          ) : (
            <Login data={data} />
          )}
        </Route>
        <Route exact path="/recipe">
          <Recipe
            data={data}
            loadData={loadAllData}
            theme={theme.color}
            changeTheme={changeTheme}
          />
        </Route>
        <Route exact path="/me/likes">
          <Likes data={data} loadData={loadAllData} theme={theme.color} changeTheme={changeTheme} />
        </Route>
        <Route exact path="/me/graphs">
          <Graphs
            data={data}
            loadData={loadAllData}
            theme={theme.color}
            changeTheme={changeTheme}
          />
        </Route>
        <Route exact path="/me">
          <Me data={data} loadData={loadAllData} theme={theme.color} changeTheme={changeTheme} />
        </Route>
        <Route exact path="/mealplan">
          <MealPlan
            data={data}
            loadData={loadAllData}
            theme={theme.color}
            changeTheme={changeTheme}
          />
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
