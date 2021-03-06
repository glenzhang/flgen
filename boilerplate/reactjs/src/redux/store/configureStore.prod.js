import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    );

    return store
}
