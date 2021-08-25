import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';



const initialState = [
  {id: 0, name: '신발', price: 120000, count: 1},
  {id: 1, name: "김성훈", price: 100, count: 1}
]
const count = [
  {id: 0, count: 10},
  {id: 1, count: 10},
  {id: 2, count: 10},
  {id: 3, count: 10},
  {id: 4, count: 10},
  {id: 5, count: 10},
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case '증가':
      const copy = [...state];
      copy[action.payload.id].count++;
      return copy;
    case '감소':
      const copy2 = [...state];
      copy2[action.payload.id].count--;
      return copy2;
    case '추가':
      const copy3 = [...state];
      copy3.push(action.payload);
      return copy3;
    default: return state;
  }
}

function reducer2(state=count, action){
  switch (action.type){
    case 'decrease':
      const result = state.find(x => x.id === action.payload.id);
      
      const copy = [...state];
      copy[result.id].count--;
      return copy;
      
    default: return state;
  }
}

const store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);