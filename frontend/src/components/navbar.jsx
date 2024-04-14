import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate instead of useHistory
import { EventContext } from "../context/event-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(EventContext);
  const cartItemCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  const navigate = useNavigate(); // Using useNavigate for navigation

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // Redirecting to the home page after logout
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Events </Link>
        <Link to="/about"> About </Link>
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
          </>
        )}
        <Link to="/cart" className="cart-link position-relative">
          {cartItemCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItemCount}</span>}
          <i className="bi bi-cart2"></i>
        </Link>
      </div>
    </div>
  );
};
