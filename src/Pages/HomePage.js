import React from "react";
import BrandBanner from "../Components/BrandBanner";
import DropNavBar from "../Components/DropNavBar";
import ProductTable from "../Components/ProductTable";
import Footer from "../Components/Footer";

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
