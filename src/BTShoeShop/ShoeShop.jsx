import React, { useState } from "react";
import prdList from "./data.json";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const ShoeShop = () => {
  console.log({ prdList });
  const [productDetail, setProductDetail] = useState(prdList[0])
  
  const handleProductDetail = (product) =>{
    setProductDetail(product)
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center">BT-ShoeShop</h1>
      <ProductList prdList={prdList} handleProductDetail = {handleProductDetail}></ProductList>

      {/* Modal detail */}
      <ProductDetail productDetail = {productDetail}></ProductDetail>
    </div>
  );
};

export default ShoeShop;
