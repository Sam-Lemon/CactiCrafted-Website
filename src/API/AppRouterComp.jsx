import React from "react";
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegPage from '../Pages/RegPage';
import Cart from '../Pages/Cart';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


export default function AppRouterComp () {

    return(
        <Container>
            <Router>
                <div>
                    <ButtonGroup>
                    <Button variant='outline-primary'>
                        <Link to='/'>Home</Link>
                    </Button>
                    <Button variant='outline-primary'>
                        <Link to='/login'>Login</Link>
                    </Button>
                    <Button variant='outline-primary'>
                        <Link to='/registration'>Register</Link>
                    </Button>
                    <Button variant='outline-primary'>
                        <Link to='/cart'>Cart</Link>
                    </Button>
                    </ButtonGroup>

                    <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/registration' component={Register}/> 
                    <Route path='/cart' component={CartComp}/>
                        
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

function Home() {
    return <HomePage />
  }
  
  function Login() {
    return <LoginPage />
  }
  
  function Register() {
    return <RegPage />
  }
  
  function CartComp () {
    return <Cart />
  }
  
