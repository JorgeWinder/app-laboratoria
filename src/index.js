import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import  App from './components/App'

import * as serviceWorker from './serviceWorker';

import 'materialize-css/dist/js/materialize'
import './global.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// alert(window.location.pathname)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
