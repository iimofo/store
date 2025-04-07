import React from "react";
import MiniProduct from "./pages/miniProduct";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function allProducts() {
  const ourProducts = [
    {
      id: 1,
      image: "src/assets/iPhone.png",
      name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      price: 1499,
    },
  ];
  const brands = [
    {
      id: 1,
      name: "Apple",
      qualty: "110",
      checkedOrNot: true,
    },
    {
      id: 2,
      name: "Samsung",
      qualty: "125",
      checkedOrNot: false,
    },
    {
      id: 3,
      name: "Xiaomi",
      qualty: "68",
      checkedOrNot: false,
    },
    {
      id: 4,
      name: "Oppo",
      qualty: "78",
      checkedOrNot: false,
    },
    {
      id: 5,
      name: "Nokia",
      qualty: "45",
      checkedOrNot: false,
    },
    {
      id: 6,
      name: "Huawei",
      qualty: "90",
      checkedOrNot: false,
    },
    {
      id: 7,
      name: "Realme",
      qualty: "60",
      checkedOrNot: false,
    },
    {
      id: 8,
      name: "Vivo",
      qualty: "80",
      checkedOrNot: false,
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex ml-30 mt-10 space-x-5">
          <div className="text-gray-400 cursor-pointer hover:text-black">
            Home
          </div>
          <KeyboardArrowRightIcon className="text-gray-400" />
          <div className="text-gray-400 cursor-pointer hover:text-black">
            Catalog
          </div>
          <KeyboardArrowRightIcon className="text-gray-400" />
          <div className="cursor-pointer">Smartphones</div>
        </div>
        <div>
          <div className="ml-30 mt-15 space-y-5">
            <div className="flex flex-col cursor-pointer">
              <div className="flex">
                <div className="border-b border-gray-300 w-60 text-xl h-10 ">
                  Brand
                </div>
                <KeyboardArrowUpIcon />
              </div>
              <input
                type="text"
                className="rounded w-60 h-10 pl-8 bg-[#F5F5F5] mt-3"
                placeholder="Search"
                style={{
                  backgroundImage: "url('src/assets/Vector.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                }}
              />
              {brands.map((i) => (
                <div className="flex items-center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={i.checkedOrNot}
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                    }
                    label={i.name}
                  />
                  <div className="text-gray-400">{i.qualty}</div>
                </div>
              ))}
            </div>
            <div className="flex cursor-pointer">
              <div className="border-b border-gray-300 w-60 text-xl h-10">
                Battery capacity
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex cursor-pointer">
              <div className="border-b border-gray-300 w-60 text-xl h-10">
                Screen type
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex cursor-pointer">
              <div className="border-b border-gray-300 w-60 text-xl h-10">
                Screen diagonal
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex cursor-pointer">
              <div className="border-b border-gray-300 w-60 text-xl h-10">
                Protection class
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex cursor-pointer">
              <div className="border-b border-gray-300 w-60 text-xl h-10">
                Built-in memory
              </div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        {/* <div className="ml-50 mt-50">
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
        </div> */}
      </div>
    </>
  );
}

export default allProducts;
