import React from "react";
import BrandBanner from "../Components/BrandBanner";
import DropNavBar from "../Components/DropNavBar";
import Footer from "../Components/Footer";
import ProductTable from "../Components/ProductTable";

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
