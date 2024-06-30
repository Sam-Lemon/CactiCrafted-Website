import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImage from "./LogoImg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button, ButtonGroup } from 'react-bootstrap';

export default function NavBar() {

    return(
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <LogoImage />
                </Navbar.Brand>
                <Nav className="nav-links">
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

                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
        </>

    );
}


function Home() {
    return <h1>Welcome to the Home Page</h1>;
  }
  
  function Login() {
    return <LoginPage />;
  }
    
  function CartComp () {
    return <Cart />;
  }



