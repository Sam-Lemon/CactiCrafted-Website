import React from 'react';
// import HomePage from './Pages/HomePage';
// import AppRouterComp from './API/AppRouterComp';
import NavBar from './Components/NavBar';
import DropNavBar from './Components/DropNavBar';
import SuccCarousel from './Components/SuccCarousel';
import ImgTable from './Components/ImgTable';
import Footer from './Components/Footer';
import banner_succs from './images/banner-succs.jpeg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <>
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
        <SuccCarousel />
        <ImgTable />
        {/* <AppRouterComp /> */}
        <Footer />
    </>
  );
}






