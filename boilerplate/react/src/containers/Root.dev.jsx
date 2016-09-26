import React, { PropTypes }  from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes/Index';
import DevTools from './DevTools';

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history} routes={routes}></Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
