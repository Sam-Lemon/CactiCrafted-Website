import React from 'react';
// import HomePage from './Pages/HomePage';
import AppRouterComp from './API/AppRouterComp';
import NavBar from './Components/NavBar';
import DropNavBar from './Components/DropNavBar';
import SuccCarousel from './Components/SuccCarousel';
import ImgTable from './Components/ImgTable';
import Footer from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <>
        <NavBar />
        <DropNavBar />
        <SuccCarousel />
        <ImgTable />
        <AppRouterComp />
        <Footer />
    </>
  );
}






