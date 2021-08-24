import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';


const store = createStore(() => ([{id: 0, name: '신발', count: 10, price: 120000}, {id: 1, name: "김성훈", count: 1, price: 100}]));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);