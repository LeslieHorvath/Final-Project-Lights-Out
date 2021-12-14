import React from 'react';
import HomePage from './Components/HomePage';
import Results from './Components/Results';
import Profile from './Components/Profile';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" >
      <HomePage />
      </Route>
      <Route path="/results" >
        <Results />
      </Route>
      <Route path="/profile" >
        <Profile />
      </Route>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
