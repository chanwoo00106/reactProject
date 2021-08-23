import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import { Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import data from './db/data';
import Header from './components/Header';


function App() {

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
          <Card data={data} />
        </Route>
  
        <Route path="/detail/:id">
          <Detail data={data} />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
