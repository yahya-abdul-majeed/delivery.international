import React from 'react';
import ReactDOM from 'react-dom/client';
import { popper } from '@popperjs/core';
import jQuery from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <Provider store={store}>
      <App/>
    </Provider>
   </React.StrictMode>
);


