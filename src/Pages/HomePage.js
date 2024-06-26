import React from "react";
import NavBar from "../Components/NavBar";
import DropNavBar from "../Components/DropNavBar";
import Carousel from "../Components/SuccCarousel";
import ImgTable from "../Components/ImgTable";
import AppRouterComp from "../API/AppRouterComp";
import Footer from "../Components/Footer";


export default function HomePage () {

    return(
        <>
        <NavBar />
        <DropNavBar />
        <Carousel />
        <ImgTable />
        <AppRouterComp />
        <Footer />
        </>
    );
}