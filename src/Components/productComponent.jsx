import React from "react";

function ProductComponent() {
  return (
    <div className="w-[520px] h-[100px] flex items-center justify-between px-4 text-black bg-white border-b border-gray-200">
      <img src="src/assets/iPhone.png" alt="iphone" className="h-20" />

      <div className="flex flex-col">
        <span>Apple iPhone 14 Pro Max</span>
        <span>128Gb Deep Purple</span>
        <span>#25139526913984</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-xl">-</button>
        <span>1</span>
        <button className="text-xl">+</button>
      </div>

      <span>$1399</span>

      <button className="text-lg">X</button>
    </div>
  );
}

export default ProductComponent;
