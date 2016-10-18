import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

// Middleware is used to do something between dispatching an action and the action hitting the reducer
// For now, we're just using some logging middleware, that logs to console for each action:
//  - the previousState, the action itself and the nextState
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}