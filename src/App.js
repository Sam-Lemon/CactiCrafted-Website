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


  /**This is what renders on the page, the Navbar is controlled
   * by the React Router. The NavBar is the only component in this
   * file because it's the only component I want on every page 
   * of the website.*/
  return (
    <>
      <Router>
        <NavBar />
        <AppRouterComp />
      </Router>
    </>
  );
}
