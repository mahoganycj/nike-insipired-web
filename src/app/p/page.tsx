import React from "react";
import Cards from "../component/Cards";
import { products } from "../libs/data";
import Navbar from "../component/Navbar";

function ProductPage() {
  return (
    <div>
      <Navbar/>
      <Cards products={products} />
    </div>
  );
}

export default ProductPage;