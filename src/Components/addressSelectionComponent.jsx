import React, { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function AddressSelectionComponent() {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const hisaddress = [
    {
      id: 0,
      addressTitle: "2118 Thornridge Cir",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(209) 555-0104",
      type: "Home",
    },
    {
      id: 1,
      addressTitle: "1234 Elm St",
      address: "1234 Elm St. Springfield, Illinois 62704",
      phone: "(217) 555-0123",
      type: "Work",
    },
    {
      id: 2,
      addressTitle: "5678 Oak St",
      address: "5678 Oak St. Chicago, Illinois 60601",
      phone: "(312) 555-0199",
      type: "Other",
    },
  ];

  return (
    <div className="flex flex-col space-y-3 items-center justify-center">
      {hisaddress.map((address, id) => (
        <div
          key={address.id}
          className="bg-gray-100 rounded-xl h-40 w-[70%] flex items-center"
        >
          <div className="p-4" onClick={() => setSelectedAddress(id)}>
            {selectedAddress === id ? (
              <RadioButtonCheckedIcon
                fontSize="large"
                className="m-3 cursor-pointer"
              />
            ) : (
              <RadioButtonUncheckedIcon
                fontSize="large"
                className="m-3 cursor-pointer"
              />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-5 mt-8">
              <h2 className="text-lg font-bold">{address.addressTitle}</h2>
              <p className="text-white bg-black rounded px-2 py-1">
                {address.type}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-gray-600 mt-5">{address.address}</p>
              <p className="text-gray-600 mt-2">{address.phone}</p>
            </div>
          </div>
          <div className="ml-auto m-4 space-x-3">
            <EditIcon className="hover:text-blue-500 cursor-pointer" />
            <ClearIcon className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      ))}
      <div className="relative w-[70%] mx-auto">
        <div
          className="border-2 border-dashed"
          style={{
            borderImage:
              "linear-gradient(to right, rgba(209,213,219,0) 0%, rgba(209,213,219,1) 50%, rgba(209,213,219,0) 100%) 1",
          }}
        />
        <AddCircleIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default AddressSelectionComponent;
