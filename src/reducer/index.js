import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { MARKET_DATA } from '../actions';

const marketReducer = (state = {}, {type, payload}) => {
	switch (type) {
		case MARKET_DATA: {
			return {...state, data: payload}
		}
		default: 
			return state;
	}
}

const rootReducer = combineReducers({
	market: marketReducer,
	router: routerReducer,
	form: formReducer
});

export default rootReducer;