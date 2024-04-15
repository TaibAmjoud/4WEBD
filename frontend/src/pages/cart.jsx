import React, { useContext } from "react";
import { EventContext } from "../context/event-context";
import { EVENTS } from "../events";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(EventContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment"); // Redirige vers la page de paiement
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {EVENTS.map((event) => {
          if (cartItems[event.id] !== 0) {
            return <CartItem data={event} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: {totalAmount}€ </p>
          {/* <button onClick={() => navigate("/")}> Continue Booking </button> */}
          <button onClick={handlePayment}>Continue Booking</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Cart is Empty</h1>
      )}
    </div>
  );
};