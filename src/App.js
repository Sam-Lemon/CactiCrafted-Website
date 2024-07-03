import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import BrandBanner from './Components/BrandBanner.jsx';
import DropNavBar from './Components/DropNavBar.jsx';
import ProductTable from './Components/ProductTable.jsx';
import Footer from './Components/Footer.jsx';
// import HomePage from './Pages/HomePage.js';



export default function App() {
  useEffect(() => {document.body.style.backgroundColor = '#E2E2E4'})

  return (
    <>
      {/* <HomePage /> */}

      <NavBar />
      <BrandBanner />
      <DropNavBar />
      <ProductTable />
      <Footer />

    </>
  );
}






