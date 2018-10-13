import { call, put } from 'redux-saga/effects';
import { getMarketData } from '../api/market';
import { MARKET_DATA } from '../actions';

function* requestMarketData(action) {
    try {
        const data = yield call(getMarketData, 'getMarketData');
        yield put({ type: MARKET_DATA, payload: data });
        action.callbackSuccess();
    }catch (error) {
		action.callbackError(error);
	}
}

export default requestMarketData