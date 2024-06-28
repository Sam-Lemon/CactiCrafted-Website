import React from "react";
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from '../Pages/LoginPage';
import RegPage from '../Pages/RegPage';
import Cart from '../Pages/Cart';


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
    return <h1>Welcome to the Home Page</h1>;
  }
  
  function Login() {
    return <LoginPage />;
  }
  
  function Register() {
    return <RegPage />;
  }
  
  function CartComp () {
    return <Cart />;
  }
  
