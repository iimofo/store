import React from "react";
import { useSelector } from "react-redux";

function paySummeryCom() {
  // const productsSummery = [
  //   {
  //     id: 1,
  //     iamge: "src/assets/iPhone.png",
  //     name: "Apple iPhone 14 Pro Max 128Gb",
  //     price: "$1399",
  //   },
  //   {
  //     id: 2,
  //     iamge: "src/assets/iPhone.png",
  //     name: "AirPods Max Silver",
  //     price: "$549",
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     iamge: "src/assets/iPhone.png",
  //     name: "Apple Watch Series 9 GPS 41mm",
  //     price: "$399",
  //     quantity: 3,
  //   },
  // ];
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className=" border border-gray-300 rounded-xl flex flex-col items-center justify-center w-130">
      <div className="text-2xl self-start ml-5 mt-4 mb-5">Summery</div>

      {cartItems.map((item) => (
        <div key={item.id}>
          <div className=" flex space-y-3 items-center justify-center bg-gray-100 h-20 w-120 rounded-xl mb-3">
            <img
              src={item.image}
              alt="Product"
              className="w-10 h-10 rounded-lg m-4"
            />
            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-black mr-5">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
      <div className=" self-start ml-5 space-y-3">
        <div className="text-gray-500">Address</div>
        <div>1131 Dusty Townline, Jacksonville, TX 40322</div>
      </div>
      <div className="self-start ml-5 space-y-2 mt-7">
        <div className="text-gray-500">Shipment method</div>
        <div>Free</div>
      </div>
      <div className="self-start ml-5 space-y-2 mt-7 w-120 mb-10">
        <div className="flex items-center justify-between">
          <div>Subtotal</div>
          <div>$2347</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-gray-500 mt-6">Estimated Tax</div>
          <div>$50</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-gray-500 mt-3">
            Estimated shipping & Handling
          </div>
          <div>$29</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="mt-6">Total</div>
          <div>$2426</div>
        </div>
      </div>
    </div>
  );
}

export default paySummeryCom;
