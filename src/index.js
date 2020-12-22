import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css';
import {debugContextDevtool} from 'react-context-devtool';

const container = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);


debugContextDevtool(container)

