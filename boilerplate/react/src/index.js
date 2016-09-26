import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './containers/Root.jsx';
import configureStore from './store/configureStore.js';

import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root store={store} history={history} />, 
    document.getElementById('app')
);
