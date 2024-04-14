import React, { useContext } from "react";
import { EventContext } from "../context/event-context";

export const CartItem = (props) => {
  const { id, eventName, price, eventImage, maxTickets } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(EventContext);

  const handleAddToCart = (eventId) => {
    if (cartItems[id] < maxTickets) {
      addToCart(eventId);
    } else {
      alert(`Sorry, only ${maxTickets} tickets are allowed for this event.`);
    }
  };

  return (
    <div className="cartItem">
      <img src={eventImage} alt=""/>
      <div className="description">
        <p>
          <b>{eventName}</b>
        </p>
        {/* <p>
          description : {description}
        </p>
        <p>
          localisation : {localisation}
        </p> */}
        <h5 className=" mb-4 "> Price : {price}€</h5>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => handleAddToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
