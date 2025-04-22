import React from "react";
import { useSelector } from "react-redux";

export default function PaySummaryCom() {
  const cartItems = useSelector(s => s.cart.cartItems);
  const subtotal     = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const estimatedTax = subtotal * 0.02;
  const shipping     = 29;
  const total        = subtotal + estimatedTax + shipping;

  return (
    <div className="border rounded-lg p-6 w-96">
      <h2 className="text-2xl mb-4">Summary</h2>
      <div className="space-y-2">
        {cartItems.map(i => (
          <div key={i.id} className="flex justify-between bg-gray-100 p-2 rounded">
            <div className="flex items-center">
              <img src={i.image} alt={i.name} className="h-10 w-10 mr-3" />
              <div>
                <p className="font-semibold">{i.name}</p>
                <p className="text-sm text-gray-600">Qty: {i.qty}</p>
              </div>
            </div>
            <div>${(i.price * i.qty).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tax (2%)</span>
          <span>${estimatedTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}