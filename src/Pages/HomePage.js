import React from "react";
import NavBar from "../Components/NavBar";
import BrandBanner from "../Components/BrandBanner";
// import AppRouterComp from "../API/AppRouterComp";
import DropNavBar from "../Components/DropNavBar";
import ProductTable from "../Components/ProductTable";
import Footer from "../Components/Footer";


export default function HomePage () {

    return(
        <>
            <div><NavBar /></div>
            <div><NavBar /></div>
            <div><BrandBanner /></div>
            <div><DropNavBar /></div>
            <div><ProductTable /></div>
            <div><Footer /></div>
        </>
    );
}