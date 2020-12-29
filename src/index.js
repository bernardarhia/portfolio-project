import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToolbarContext from './context/toolbarContext';
import UserContext from './context/userContext';
import './styles/style.css';
const container = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <UserContext>
   <ToolbarContext> <App /></ToolbarContext>
    </UserContext>
  </React.StrictMode>,
  container
);


