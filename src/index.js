import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import contactReducer from './redux/reducer/ContactReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(contactReducer, composeWithDevTools());

root.render(
  <Provider store={store}>
  <Router>
      <App />
  </Router>
</Provider>
);

