import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

const initianlState = [{id: 0, name: '김성훈(코노)', count: 1, price: 1000}]
let index = 1;
function reducer(state=initianlState, action){
  switch(action.type){
    case 'add':
      const obj = action.payload
      let found = state.findIndex(a => a.name === obj.name && a.price === obj.price);
      if (found >= 0) {
        state[found].count++;
        return state
      }else {
        state.push({id: index++,...obj});
        return state;
      }
      

    case 'up':
      const id = state.findIndex(x => x.id === action.id);
      const copy = [...state];
      copy[id].count++;
      return copy;
    
      case 'down':
        const id2 = state.findIndex(x => x.id === action.id);
        const copy2 = [...state];
        copy2[id2].count--;
        return copy2
    default: return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);