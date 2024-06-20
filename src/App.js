import React from 'react';
// import { Login } from './Components/Login';
// import { Registration } from './Components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant='outline-secondary'>
              <Link to='/'>Home</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to='/login'>Login</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to='/registration'>Registration</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to='/product-page'>Product</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to='/cart'>Cart</Link>
            </Button>
          </ButtonGroup>

          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/registration'>
              <Registration />
            </Route>
            <Route path='/product-page'>
              <Product />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

function Home() {
  return <h2>Home</h2>
}

// function Login() {
//   return <Login />
// }

// function Registration() {
//   return <Registration />
// }

// function Product() {

// }

// function Cart () {

// }
