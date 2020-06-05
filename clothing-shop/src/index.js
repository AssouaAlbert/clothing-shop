import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //This is a compopnent Give access to the store (where state is kept)
import './index.css';
import App from './App';
//Import the store
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

