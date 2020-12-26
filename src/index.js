import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserContext from './context/userContext';
import './styles/style.css';
import { debugContextDevtool } from 'react-context-devtool';
const container = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <UserContext>
    <App />
    </UserContext>
  </React.StrictMode>,
  container
);

debugContextDevtool(container);

