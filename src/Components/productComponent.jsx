import { useState } from "react";

function ProductComponent() {
  const [quality, setQuality] = useState(1);

  const add = () => {
    setQuality((prev) => prev + 1);
  };

  const sub = () => {
    setQuality((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="w-[520px] h-[100px] flex items-center justify-between px-4 text-black bg-white border-b border-gray-200">
      <img src="src/assets/iPhone.png" alt="iphone" className="h-20" />

      <div className="flex flex-col">
        <span>Apple iPhone 14 Pro Max</span>
        <span>128Gb Deep Purple</span>
        <span>#25139526913984</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-xl cursor-pointer" onClick={sub}>
          -
        </button>
        <span className="flex border rounded border-gray-200 w-7 h-7 items-center justify-center">
          {quality}
        </span>
        <button className="text-xl cursor-pointer" onClick={add}>
          +
        </button>
      </div>

      <span>$1399</span>

      <button className="text-lg">X</button>
    </div>
  );
}

export default ProductComponent;
