import React from "react";
import Header from "./Header";
import "./Cart.css";

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="new cart"
        className="cart-img"
      />
    </div>
  </>
);

export default Cart;
