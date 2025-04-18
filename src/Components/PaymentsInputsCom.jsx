import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SimCardIcon from "@mui/icons-material/SimCard";
import WifiIcon from "@mui/icons-material/Wifi";

function PaymentsInputsCom() {
  const [cardNumber, setCardNumber] = useState("9999 9999 9999 9999");
  const [cardholder, setCardholder] = useState("Mustafa Hashim");

  const [ActivePayment, setActivePayment] = React.useState(0);
  const paymentMethods = [
    {
      id: 0,
      name: "Credit Card",
    },
    {
      id: 1,
      name: "PayPal",
    },
    {
      id: 2,
      name: "PayPal Credit",
    },
  ];
  const handlePaymentClick = (id) => {
    setActivePayment(id);
  };
  return (
    <div>
      <div className="ml-20">
        <div className="pl-5 text-2xl">Payment</div>
        <div className="w-150  p-5">
          <div className="flex space-x-20 ">
            {paymentMethods.map((payment, id) => (
              <div
                key={payment.id}
                onClick={handlePaymentClick.bind(this, payment.id)}
                className={`bg-white self-start flex items-center cursor-pointer ${
                  id === ActivePayment ? "text-black border-b" : "text-gray-400"
                }`}
              >
                <div className=" flex items-center w-full space-x-50">
                  <h2 className="font-semibold">{payment.name}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-black w-100 h-50 rounded-2xl mt-7">
            <div className="relative z-20 text-white h-full">
              <div className="flex items-center mt-5">
                <SimCardIcon className="transform rotate-90 ml-10 mt-5 text-yellow-400" />
                <WifiIcon className="transform rotate-90 ml-2 mt-5" />
              </div>
              <div
                className="absolute bottom-14 left-10"
                onBlur={(e) => {
                  e.target.value = e.target.value
                    .replace(/\s/g, "")
                    .replace(/(.{4})/g, "$1 ");
                }}
              >
                {cardNumber}
              </div>
              <div className="absolute bottom-5 left-8">{cardholder}</div>
              <div className="flex bg-red-500 items-center justify-center w-12 h-12 absolute right-13 bottom-5 rounded-full"></div>
              <div className="flex bg-orange-500 items-center justify-center w-12 h-12 absolute right-5 bottom-5 rounded-full"></div>
            </div>
          </div>

          <div className="mt-7 space-y-3">
            <input
              className="border border-gray-300 w-130 h-13 rounded-xl p-3"
              type="text"
              placeholder="Cardholder Name"
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
            />
            <input
              className="border border-gray-300 w-130 h-13 rounded-xl p-3 "
              type="mumber"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={16}
              onBlur={(e) => {
                e.target.value = e.target.value
                  .replace(/\s/g, "")
                  .replace(/(.{4})/g, "$1 ");
              }}
            />
            <div className="flex space-x-2">
              <input
                className="border border-gray-300  h-13 rounded-xl p-3 w-65"
                type="text"
                placeholder="Exp.Data"
              />
              <input
                className="border border-gray-300 h-13 rounded-xl p-3 w-65"
                type="text"
                placeholder="CVV"
              />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="Same as billing address"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentsInputsCom;
