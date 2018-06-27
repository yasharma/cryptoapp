import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import {createLogger} from 'redux-logger';

import Saga from 'saga';
import rootReducer from 'reducer';

// create middlewares
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
	collapsed: true
});


let middleware = applyMiddleware(
  	routerMiddleware(history),
  	sagaMiddleware,
  	logger
);


if (module.hot) {
	module.hot.accept('../reducer', () => {
    	store.replaceReducer(rootReducer)
  	});
}

// add the redux dev tools
//middleware = compose(middleware, window.devToolsExtension());

// create store
const store = createStore(
	connectRouter(history)(rootReducer), // new root reducer with router state
	compose(middleware)
);

// run saga middleware
sagaMiddleware.run(Saga);

// export
export { store, history };