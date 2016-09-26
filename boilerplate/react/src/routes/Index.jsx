import React from 'react';
import { Route } from 'react-router';
import Master from '../layouts/Master.jsx';
import NoMatch from '../views/NoMatch.jsx';

export default (
  <Route path="/" component={Master}>
    <Route path="home" getComponent={(location, cb) => {
        require.ensure([], (require) => {
           // Retrieve checkout page component
           cb(null, require('../views/Home.jsx').default);
        });
    }} />
    
    <Route path="app" getComponent={(location, cb) => {
        require.ensure([], (require) => {
           // Retrieve checkout page component
           cb(null, require('../views/App.jsx').default);
        });
    }} />

    <Route path="*" component={NoMatch} />
  </Route>
);