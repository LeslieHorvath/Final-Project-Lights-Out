import React from 'react';
import HomePage from './Components/HomePage';
import Results from './Components/Results';
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
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
