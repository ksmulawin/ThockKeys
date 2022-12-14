import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { CartItem } from "./cart-item";
import "./cart.css";
import { computeCartTotal } from "../../helpers/shopComputation";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const productList = useSelector((state) => state.products.value);
  let navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {productList.map((product) => {
          if (typeof cartItems[product.id] !== "undefined") {
            return <CartItem data={product} cart={cartItems[product.id]} />;
          }
        })}
      </div>

     
        <div className="checkout">
          <h4>
              <span className="float-left">Sub-Total: </span>
              <span className="float-right">${computeCartTotal(cartItems)}</span>
              <div className="clearboth" />
          </h4>
          <button onClick={() => { navigate("/");}}> Continue Shopping </button>
          <button className="checkout-btn">
            {" "}
            Checkout{" "}
          </button>
        </div>
      
    </div>
  );
};
