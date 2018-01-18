
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ConnectedIntlProvider from './ConnectedIntlProvider';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import esLocaleData from 'react-intl/locale-data/es';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

addLocaleData([...enLocaleData, ...deLocaleData, ...esLocaleData]);
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

ReactDOM.render(<Provider store={store}>
  <ConnectedIntlProvider>
    <App store={store} />
  </ConnectedIntlProvider>
</Provider>
, document.getElementById('root'));
