import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';
import initialState from './mock';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        combineReducers(reducers),
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
};

export default configureStore;