import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import {store, history} from 'store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  	<Provider store={store}>
    	<App history={history} />
  	</Provider>,
  	document.getElementById('root')
);
registerServiceWorker();