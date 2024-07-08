import React, { useEffect } from "react";
import NavBar from "./Components/NavBar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouterComp from "./API/AppRouterComp.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  /**Changing the background color. */
  useEffect(() => {
    document.body.style.backgroundColor = "#E2E2E4";
  });

  return (
    <>
      <Router>
        <NavBar />
        <AppRouterComp />
      </Router>
    </>
  );
}
