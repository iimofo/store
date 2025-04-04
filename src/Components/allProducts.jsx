import React from "react";
import MiniProduct from "./pages/miniProduct";

function allProducts() {
  const ourProducts = [
    {
      id: 1,
      image: "src/assets/iPhone.png",
      name: "iPhone 14",
      price: 1499,
    },
  ];
  return (
    <>
      <div className="ml-50 mt-50">
        <div>efsfs</div>
        {ourProducts.map((i) => (
          <div key={i.id}>
            <MiniProduct
              image={i.image}
              id={i.id}
              name={i.name}
              price={i.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default allProducts;
