import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";
import "./navbar.css";
import layout from "../constants/layout";

export const Navbar = () => {
  const noOfCartItems = useSelector((state) => Object.keys(state.cartItems.value).length);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" id="siteBrand">  {layout.navigation.siteBrand} </Link>
        <Link to="/cart" id="cart">
          <ShoppingCart size={20} />{noOfCartItems > 0 ? "("+noOfCartItems+")" : ""}
        </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/"> Shop </Link>
      </div>
    </div>
  );
};
