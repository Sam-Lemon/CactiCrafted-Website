import React from "react";
import NavBar from "../Components/NavBar";
import AppRouterComp from "../API/AppRouterComp";
import DropNavBar from "../Components/DropNavBar";
import Carousel from "../Components/SuccCarousel";
import ProductTable from "../Components/ProductTable";
import Footer from "../Components/Footer";


export default function HomePage () {

    return(
        <>
        <NavBar />
        <AppRouterComp />
        <DropNavBar />
        <Carousel />
        <ProductTable />
        <Footer />
        </>
    );
}