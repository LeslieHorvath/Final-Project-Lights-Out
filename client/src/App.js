import React from 'react';
import HomePage from './Components/HomePage';

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" >
      <HomePage />
      </Route>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
