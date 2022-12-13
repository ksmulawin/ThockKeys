import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./product";
import "./shop.css";
import layout from "../../constants/layout";

export const Shop = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.value);
  
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>{layout.context.catchPhrase}</h3>
      </div>

      <div className="products">
        {productList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
