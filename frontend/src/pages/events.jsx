import React, { useContext } from "react";
import axios from 'axios';
import { EventContext } from "../context/event-context";

export const Events = (props) => {
  // const { id, maxTickets } = props.data;
  const { id, eventName, description, localisation, price, eventImage, maxTickets } = props.data;
  const { addToCart, cartItems } = useContext(EventContext);

   useEffect(() => {
    // Fetch event details from the API
    axios.get(`http://localhost:4000/api/events/${id}`)
      .then(response => {
        setEventDetails(response.data); // Update state with event details
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });
  }, [id]); // Execute this effect only once during component mount

  const cartItemCount = cartItems[id];

  const handleAddToCart = (eventId) => {
    if (cartItemCount < maxTickets) {
      addToCart(eventId);
    } else {
      alert(`Sorry, only ${maxTickets} tickets are allowed for this event.`);
    }
  };

  return (
    <div className="card event h-90">
      <img src={eventImage} className="card-img-top" alt=""/>
      <div className="card-body">
        <h3 className="card-title m-1 pb-3">{eventName}</h3>
        <h6 className="card-text pb-2">Description: {description}</h6>
        <h6 className="card-text pb-2">Localisation: {localisation}</h6>
        <h5 className=" mt-4 d-flex justify-content-around"> Price : {price}€</h5>
      </div>
      <button className="btn btn-primary addToCartBttn" onClick={() => handleAddToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
