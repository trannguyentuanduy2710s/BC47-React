import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { prdList, handleProductDetail } = props;
  return (
    <div className="row">
      {prdList.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          handleProductDetail={handleProductDetail}
        ></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
