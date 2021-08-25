import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import { Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import data from './db/data';
import Header from './components/Header';
import axios from 'axios';
import Cart from './components/Cart';


function App() {
  const [Data, setData] = useState(data);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <div className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a sample hero unit, a simple Jumbotron-style components for calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <div className="container">
            <Card data={Data} />
            
            <button className="btn btn-primary" onClick={() => {
              axios.get("https://codingapple1.github.io/shop/data2.json")
              .then(data => {
                setData([...Data, ...data.data]);
              })
              .catch(e => {
                console.error(e);
              })
            }}>더보기</button>
          </div>
          
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
  
        <Route path="/detail/:id">
          <Detail data={Data} />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
