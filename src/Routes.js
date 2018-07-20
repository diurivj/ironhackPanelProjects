import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from "./components/HomeContainer";

export const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomeContainer} />
    </Switch>
  );
};