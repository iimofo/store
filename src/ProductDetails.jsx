// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ourProducts } from "./productsData";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = ourProducts.find((item) => item.id === Number(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const Colors = [
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "black",
    },
    {
      id: 3,
      color: "green",
    },
    {
      id: 4,
      color: "yellow",
    },
    {
      id: 5,
      color: "pink",
    },
  ];

  return (
    <div className="mt-10 justify-center flex ">
      <div>
        <img src={product.image} alt={product.name} className="h-150" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg">${product.price}</p>
        <div className="flex items-center">
          Select Color:
          <div className="flex ml-5 space-x-2">
            {Colors.map((color) => (
              <button
                key={color.id}
                className={`w-10 h-10 rounded-full cursor-pointer`}
                style={{ backgroundColor: color.color }}
                onClick={() => console.log(`Selected color: ${color.color}`)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
