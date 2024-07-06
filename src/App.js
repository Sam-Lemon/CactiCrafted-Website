import React, { useEffect } from "react";
// import NavBar from "./Components/NavBar.jsx";
import BrandBanner from "./Components/BrandBanner.jsx";
import DropNavBar from "./Components/DropNavBar.jsx";
import ProductTable from "./Components/ProductTable.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouterComp from "./API/AppRouterComp.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E2E2E4";
  }, []);

  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <AppRouterComp />
        <BrandBanner />
        <DropNavBar />
        <ProductTable />
        <Footer />
      </Router>
    </>
  );
}
