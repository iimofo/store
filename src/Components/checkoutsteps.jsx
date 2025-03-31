import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";

function CheckoutSteps({ activeStep, onStepClick }) {
  const checkoutStepsTabs = [
    {
      steptext: "Step 1",
      title: "Address",
      icon: (
        <div className="bg-black rounded-full p-1 inline-block">
          <LocationOnIcon className="w-10 h-10 text-white" />
        </div>
      ),
    },
    {
      steptext: "Step 2",
      title: "Shipping",
      icon: (
        <div className="bg-black rounded-full p-1 inline-block">
          <ShoppingCartIcon className="w-10 h-10 text-white" />
        </div>
      ),
    },
    {
      steptext: "Step 3",
      title: "Payment",
      icon: (
        <div className="bg-black rounded-full p-1 inline-block">
          <PaymentIcon className="w-10 h-10 text-white" />
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-around items-center p-20 rounded-lg w-full">
      {checkoutStepsTabs.map((step, index) => (
        <div
          key={index}
          className="flex items-center justify-center "
          onClick={() => onStepClick && onStepClick(index)}
        >
          <div>{step.icon}</div>
          <div
            className={`flex flex-col items-center ml-2 ${
              index === activeStep ? "text-black" : "text-gray-400"
            }`}
          >
            <p className="text-sm font-bold">{step.steptext}</p>
            <h1 className="text-lg font-semibold">{step.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckoutSteps;
