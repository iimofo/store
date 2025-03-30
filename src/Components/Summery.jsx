import React from "react";
import { Link } from "react-router-dom";

function Summery() {
  return (
    <>
      <div className="border rounded border-gray-200">
        <div className="ml-10 mt-10">Order Summary</div>
        <div className="m-10">
          <div>
            <div className="text-gray-500">Discount code / Promo code</div>
            <input
              placeholder="Code"
              className="rounded border mt-2 h-15 w-100 pl-4 border-gray-300"
            />
          </div>
          <div className="mt-5">
            <div className="">
              <div className="text-gray-500">Your bonus card number</div>
              <div className="rounded border border-gray-300">
                <input
                  placeholder="Enter Card Number"
                  className=" mt-2 h-15 w-70 pl-4 outline-none"
                />
                <button className="mr-4 p-2 w-20 rounded border mb-4 cursor-pointer">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>Subtotal</div>
            <div className="mt-3">Estimated Tax</div>
            <div className="mt-3">Estimated shipping & Handling</div>
            <div className="mt-5">Total</div>
          </div>
          <Link to="/checkout">
            <button className="bg-black text-white py-4 w-100 rounded mt-10 cursor-pointer">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Summery;
