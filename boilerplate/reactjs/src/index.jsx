import React from 'react';
import { render } from 'react-dom';
import { browserHistory, hashHistory, useRouterHistory } from 'react-router';
import Root from './containers/Root.jsx';
import { createHashHistory } from 'history';
import configureStore from './redux/store/configureStore.js';
import { syncHistoryWithStore } from 'react-router-redux';

//去除DefaultQueryKey = '_k' https://github.com/ReactTraining/react-router/issues/1967
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();
const history = syncHistoryWithStore(appHistory, store);

render(
    <Root store={store} history={history} />,
    document.getElementById('app')
);


if (process.env.NODE_ENV !== 'production') {
    //这一句一定要加不然出现[HMR] The following modules couldn't be hot updated: (They would need a full reload!)
    module.hot.accept();
}
