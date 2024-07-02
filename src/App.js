import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import Cart from './Pages/Cart.js';
import BrandBanner from './Components/BrandBanner';
import DropNavBar from './Components/DropNavBar';
import ProductTable from './Components/ProductTable.jsx';
import Footer from './Components/Footer.jsx';
import LoginPage from './Pages/LoginPage.js';


export default function App() {
  useEffect(() => {document.body.style.backgroundColor = '#E2E2E4'})

  return (
    <>
      <div><NavBar /></div>
      <div><ProductTable /></div>
      <div><Cart /></div>
    </>
  );
}






