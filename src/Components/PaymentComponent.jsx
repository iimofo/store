import React from "react";
import PaySummeryCom from "./PaySummaryCom"; // Renamed for consistency
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
