import React from "react";
import MiniProduct from "./pages/miniProduct";

function allProducts() {
  const ourProducts = [
    {
      id: 1,
      image: "src/assets/iPhone.png",
      name: "Apple iPhone 14 Pro Max 128Gb",
      price: 1499,
    },
  ];
  return (
    <>
      <div className="ml-50 mt-50">
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
