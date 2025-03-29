import React from "react";
import ProductComponent from "../productComponent";
import Summery from "../Summery"
function shopping() {
  return (
    <>
      <div className="flex justify-center items-center mt-20 space-x-10">
        <div className="flex justify-center items-center mt-20 flex-col space-y-4">
          <div>Shopping Cart</div>
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
        <Summery/>
      </div>
    </>
  );
}

export default shopping;
