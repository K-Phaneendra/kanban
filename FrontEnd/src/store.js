import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import combinedReducer from './reducers';

const middelware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(combinedReducer, middelware);
