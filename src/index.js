import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/create-store';
import './index.css';
import App from './components/app';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  MOUNT_NODE
);

