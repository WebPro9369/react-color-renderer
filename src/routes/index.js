import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Tab1 from '../containers/Tab1';
import Tab2 from '../containers/Tab2';

export default () => (
  <div>
    <Switch>
      <Route path="/tab1" component={Tab1} />
      <Route path="/tab2" component={Tab2} />
      <Redirect to="/tab1" />
    </Switch>
  </div>
);
