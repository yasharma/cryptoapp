import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export const authorize = (email, password) => ({
  	type: 'AUTH_REQUEST',
  	payload: { email, password }
});

const rootReducer = combineReducers({
	router: routerReducer,
	form: formReducer
});

export default rootReducer;