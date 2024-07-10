import React from "react";
import BrandBanner from "../Components/BrandBanner";
import DropNavBar from "../Components/DropNavBar";
import Footer from "../Components/Footer";
import ProductTable from "../Components/ProductTable";


/**This is the homepage, on it there is a BrandBanner, 
 * DropNavBar, ProductTable, and a Footer. The main
 * NavBar is in the App.js file because I wanted it to 
 * be on every page.*/
export default function HomePage() {
  return (
    <>
      <BrandBanner />
      <DropNavBar />
      <ProductTable />
      <Footer />
    </>
  );
}
