import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

export default function AppRouterComp() {
  return (
    <Container>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
    </Container>
  );
}
