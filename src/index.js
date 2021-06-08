import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProvideAuth } from './context/AuthContext'
import { ProvideChat } from './context/ChatContext'
import { ProvideCommunity } from './context/CommunityContext'
import { HashRouter } from 'react-router-dom'
const Router = HashRouter

ReactDOM.render(
  <React.StrictMode>
    <ProvideCommunity>
      <ProvideAuth>
        <ProvideChat>
          <Router>
            <App />
          </Router>
        </ProvideChat>
      </ProvideAuth>
    </ProvideCommunity>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
