import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

const BTComponent = () => {
  return (
    <div>
      <h1 className="text-center mb-5">BT - Thực hành Layout</h1>
      <Header></Header>
      <Content></Content>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
};

export default BTComponent;
