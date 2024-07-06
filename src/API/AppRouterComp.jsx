import React from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import CartPage from "../Pages/CartPage";

export default function AppRouterComp() {
  return (
    <Container>
      <div>
        <ButtonGroup className="nav-links">
          <Link to="/">
            <Button className="nav-btn btn-light">Home</Button>
          </Link>

          <Link to="/login">
            <Button className="nav-btn btn-light">Login</Button>
          </Link>

          <Link to="/cart">
            <Button className="nav-btn btn-light">Cart</Button>
          </Link>
        </ButtonGroup>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </div>
    </Container>
  );
}
