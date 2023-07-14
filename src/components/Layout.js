import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutComponent = (props) => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div>{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutComponent;