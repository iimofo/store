import React from "react";
import PaySummeryCom from "./paySummeryCom";
import PaymentsInputsCom from "./PaymentsInputsCom";

function PaymentComponent() {


  return (
    <>
      <div className="flex  justify-center">
        <PaySummeryCom />
        <PaymentsInputsCom />
      </div>
    </>
  );
}

export default PaymentComponent;
