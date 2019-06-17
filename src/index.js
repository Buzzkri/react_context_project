import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Account from './components/Account';
import AccountProvider from "./providers/AccountProvider";


ReactDOM.render(
  <AccountProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AccountProvider>,
  document.getElementById('root')
);
