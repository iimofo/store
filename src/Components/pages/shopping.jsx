import React from "react";
import ProductComponent from "../productComponent";

function shopping() {
  return (
    <>
      <div className="flex justify-center items-center mt-20 flex-col space-y-4">
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>
    </>
  );
}

export default shopping;
