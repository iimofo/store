import React from "react";
import ProductComponent from "../productComponent";
import Summery from "../Summery";
import { useSelector } from "react-redux";

function Shopping() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex justify-center items-center mt-20 space-x-10">
      <div className=" justify-center items-center flex-col space-y-4">
        <div>Shopping Cart</div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <ProductComponent
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <Summery />
    </div>
  );
}

export default Shopping;
