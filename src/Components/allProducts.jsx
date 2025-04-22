import React, { useState } from "react";
import MiniProduct from "./pages/miniProduct";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ourProducts } from "../productsData";

function AllProducts() {
  const [open, setOpen] = useState(false);

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
      <div>
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
        <div className="flex">
          <div className="ml-30 mt-15 space-y-5 w-60 ">
            <div className="flex flex-col w-60 ">
              <div className="flex cursor-pointer">
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
                <div className="flex items-center" key={i.id}>
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

          <div className="mt-17 ml-10 w-[67rem]">
            <div>
              <div className="mb-5">
                Selected Products: {ourProducts.length}
              </div>
              <div className="flex justify-end mb-3">
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setOpen(!open)}
                    className="bg-white text-black px-4 py-2 rounded-lg shadow flex items-center"
                  >
                    By rating
                    <KeyboardArrowDownIcon className="ml-14" />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                      <ul className="py-2 text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          By price
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          By type
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
