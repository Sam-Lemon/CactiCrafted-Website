import React from 'react';
import { Cart } from './Components/Cart'
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
    <div>
      <Cart />

      <Container>
        <Router>
          <div>
            <ButtonGroup>
              <Button variant='outline-danger'>
                <Link to='/'>Home</Link>
              </Button>
              <Button variant='outline-danger'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button variant='outline-danger'>
                <Link to='/registration'>Registration</Link>
              </Button>
              <Button variant='outline-danger'>
                <Link to='/product-page'>Product</Link>
              </Button>
              <Button variant='outline-danger'>
                <Link to='/cart'>Cart</Link>
              </Button>
            </ButtonGroup>

            <Switch>
              <Route path='/'>
                <Home />
              </Route>
              <Route path='/login'>
                <LoginForm />
              </Route>
              <Route path='/registration'>
                <RegistrationForm />
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
    </div>
  );
}

function Home() {
  return <h2>Home</h2>
}

function LoginForm() {
  return <Login />
}

function RegistrationForm() {
  return <Register />
}

function Product() {
  return <ProductPage />
}

function Cart () {
  return <Cart />
}
