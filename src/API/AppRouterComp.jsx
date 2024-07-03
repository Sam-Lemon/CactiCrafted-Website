import React from "react";
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from '../Pages/LoginPage';
import Cart from '../Pages/Cart';


export default function AppRouterComp () {

    return(
        <Container>
            <Router>
                <div>
                    <ButtonGroup className="nav-links">
                        <Button className="nav-btn btn-light">
                            <Link to='/'>Home</Link>
                        </Button>
                        <Button className="nav-btn btn-light">
                            <Link to='/login'>Login</Link>
                        </Button>
                        <Button className="nav-btn btn-light">
                            <Link to='/cart'>Cart</Link>
                        </Button>
                    </ButtonGroup>

                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/cart' component={CartComp}/>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

function Home() {
    return <h1><HomePage /></h1>;
  }
  
  function Login() {
    return <LoginPage />;
  }
    
  function CartComp () {
    return <Cart />;
  }
  
