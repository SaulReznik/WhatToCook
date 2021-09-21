import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';
import initialState from './mock';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const configureStore = () => {
    return createStore(
        combineReducers(reducers),
        initialState as any,
        composeEnhancers(applyMiddleware(thunk))
    );
};

export default configureStore;