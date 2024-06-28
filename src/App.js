import React, { useEffect } from 'react';
import HomePage from './Pages/HomePage';
import AppRouterComp from './API/AppRouterComp';
import NavBar from './Components/NavBar';
import DropNavBar from './Components/DropNavBar';
import SuccCarousel from './Components/SuccCarousel';
import ProductTable from './Components/ProductTable';
import Footer from './Components/Footer';
import banner_succs from './images/banner-succs.jpeg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductCard from './Components/ProductCard';

export default function App() {
  useEffect(() => {document.body.style.backgroundColor = '#E8E5E5'})

  return (
    <>
      <ProductCard />
        <NavBar />
        <div className='succ-banner' 
          style={{
            backgroundImage: `url(${banner_succs})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}>
        <div>
            <p>Some blurb about the company</p>
        </div>
        </div>
        <DropNavBar />
        <AppRouterComp />
        <SuccCarousel />
        <ProductTable />
        <hr />
        <Footer />
    </>
  );
}






