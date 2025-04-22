import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import AddressSelectionComponent from "./AddressSelectionComponent";
import ShoppingComponent from "./ShoppingComponent";
import PaymentComponent from "./PaymentComponent";

export default function Checkout() {
  const [step, setStep] = useState(0);
  const cartItems = useSelector((s) => s.cart.cartItems);

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    // map exactly to Kyrrex schema
    const invoiceItems = cartItems.map((i) => ({
      name: i.name,
      price: i.price,
      quantity: i.qty,
    }));

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/create-invoice",
        {
          fiatCurrency: "eur",
          items: invoiceItems,
          isUnlimited: false,
        }
      );
      window.location.href = data.invoiceUrl;
    } catch (err) {
      console.error("Error creating invoice:", err.response?.data || err);
    }
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));
  const nextLabel = step === 2 ? "Checkout" : "Next";

  return (
    <div className="p-8">
      <CheckoutSteps activeStep={step} />

      {step === 0 && <AddressSelectionComponent />}
      {step === 1 && <ShoppingComponent />}
      {step === 2 && <PaymentComponent />}

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
