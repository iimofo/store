import React, { useState } from "react";
import Checkoutsteps from "./checkoutsteps";
import AddressSelectionComponent from "./addressSelectionComponent";
import ShoppingComponent from "./shoppingComponent";
import PaymentComponent from "./paymentComponent";

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextClick = () => {
    setActiveStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep));
  };

  const handleBackClick = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
  };

  return (
    <div className=" mb-50 ">
      <Checkoutsteps activeStep={activeStep} />

      {activeStep === 0 ? (
        <AddressSelectionComponent />
      ) : activeStep === 1 ? (
        <ShoppingComponent />
      ) : activeStep === 2 ? (
        <PaymentComponent />
      ) : null}

      <div className="space-x-5 mt-5 absolute right-0 mr-65">
        <button
          onClick={handleBackClick}
          className="border rounded bg-white text-black px-7 py-2 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleNextClick}
          className="border rounded bg-black text-white px-7 py-2 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Checkout;
