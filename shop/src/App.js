import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './components/Detail';

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/detail">Home</Link> </Nav.Link>
              <Nav.Link> <Link to="/">Detail</Link> </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
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
          <Card />
        </Route>
  
        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/:id">
          <div>아아아아아아아아</div>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
