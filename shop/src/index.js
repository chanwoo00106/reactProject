import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';



const initialState = []
const count = [
  {id: 0, count: 10},
  {id: 1, count: 11},
  {id: 2, count: 12},
  {id: 3, count: 13},
  {id: 4, count: 14},
  {id: 5, count: 15},
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case '증가':
      console.log(action.payload.id);
      const copy = [...state].forEach(x => {
        console.log(x.count)
        if (x.id === action.payload.id) {
          x.count++;
        }
      });
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
      const result = state.findIndex(x => x.id === action.payload.id);
      console.log(result);
      const copy = [...state];
      copy[result].count--;
      return copy;

    case 'increase':
      const copy2 = [...state];
      copy2.forEach(x => {
        if (x.id === action.payload.id) {
          x.count++;
        }
      });
      return copy2;

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