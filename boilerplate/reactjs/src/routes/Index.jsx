import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Master from '../layouts/Master';
import Home from '../views/Home';
import NoMatch from '../views/NoMatch';
import FaXian from '../views/FaXian';

export default (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    <Route path="about" getComponent={(location, cb) => {
      require.ensure([], (require) => {
        // Retrieve checkout page component
        cb(null, require('../views/About').default);
      });
    }} />

    <Route path="countdown" getComponent={(location, cb) => {
      require.ensure([], (require) => {
        // Retrieve checkout page component
        cb(null, require('../views/Countdown').default);
      });
    }} />

    <Route path="togglepanel" getComponent={(location, cb) => {
      require.ensure([], (require) => {
        // Retrieve checkout page component
        cb(null, require('../views/TogglePanel').default);
      });
    }} />
  
    <Route path="faxian" getComponent={(location, cb) => {
      require.ensure([], (require) => {
        // Retrieve checkout page component
        cb(null, require('../views/FaXian').default);
      });
    }} />

    <Route path="item/:id" getComponent={(location, cb) => {
      require.ensure([], (require) => {
        // Retrieve checkout page component
        cb(null, require('../views/FaXianDetail').default);
      });
    }} />

    <Route path="*" component={NoMatch} />

  </Route>
);