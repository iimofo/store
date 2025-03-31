import React, { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function ShipmentComponent() {
  const [selectedShipping, setSelectedShipping] = useState(1);

  const shipmentMethods = [
    {
      id: 1,
      name: "Regular shipment",
      price: "Free",
      estimatedDelivery: "17 Oct 2023",
    },
    {
      id: 2,
      name: "Get your delivery as soon as possible",
      price: "$8.5",
      estimatedDelivery: "1 Oct 2023",
    },
    {
      id: 3,
      name: "Schedule",
      price: "",
      estimatedDelivery: "Select Date ^",
    },
  ];

  return (
    <div className="flex flex-col space-y-3 items-center justify-center">
      {shipmentMethods.map((shipment) => (
        <div
          key={shipment.id}
          className="bg-white border border-gray-300 rounded-2xl h-20 w-[70%] flex items-center p-3 cursor-pointer"
          onClick={() => setSelectedShipping(shipment.id)}
        >
          {selectedShipping === shipment.id ? (
            <RadioButtonCheckedIcon fontSize="large" />
          ) : (
            <RadioButtonUncheckedIcon fontSize="large" />
          )}
          <div className="ml-4 flex items-center w-full">
            <p>{shipment.price}</p>
            <h2 className="font-semibold ml-3">{shipment.name}</h2>
            <p className="ml-auto">{shipment.estimatedDelivery}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShipmentComponent;
