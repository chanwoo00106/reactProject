import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';



const initialState = [
  {id: 0, name: '신발', count: 10, price: 120000},
  {id: 1, name: "김성훈", count: 1, price: 100}
]

function reducer(state = initialState, action) {
  switch (action.type) {
    case '증가':
      const copy = [...state];
      copy[0].count++;
      return copy;
    case '감소':
      const copy2 = [...state];
      copy2[0].count--;
      return copy2;
    default: return state;
  }
}

const store = createStore(reducer);

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