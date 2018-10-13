import { takeLatest } from 'redux-saga/effects';
import requestMarketData from './market';
import { MARKET_DATA_REQUEST } from '../actions';

function* Saga() {
    yield takeLatest(MARKET_DATA_REQUEST, requestMarketData);
}

export default Saga;