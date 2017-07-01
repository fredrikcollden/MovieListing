import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

import Main from './components/Main';
import css from 'normalize.css';

const store = storeConfig(); 

render(
	<Provider store={store}>
		<Main/>
	</Provider>, 
	document.getElementById('app')
);