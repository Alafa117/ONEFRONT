import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);