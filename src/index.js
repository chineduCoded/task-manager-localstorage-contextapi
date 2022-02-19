import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoListContextProvider } from './context/TodoListContext';


ReactDOM.render(
  <React.StrictMode>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

