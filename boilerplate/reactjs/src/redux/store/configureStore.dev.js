import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../../containers/DevTools';

const logger = createLogger({ collapsed: true });
//const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);

export default function configureStore(preloadedState) {
    //const store = createStoreWithMiddleware(rootReducer);

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(logger, thunkMiddleware),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        });
    }

    return store
}
