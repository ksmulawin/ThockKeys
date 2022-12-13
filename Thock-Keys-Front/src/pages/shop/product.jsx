import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../reducers/CartReducers";

export const Product = (props) => {
  const { id, productName, price, productImage,stock } = props.data;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.value);
  const [itemQuantity, setQuantity] = useState(1);
 
  return (
    <div className="product" key={id} id={id}>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        
        {typeof cartItems[id] === 'undefined' ?  
          <p> Quantity : <input type="number" defaultValue={itemQuantity} max={stock} onChange={(e) => {setQuantity(e.target.value)}}/> </p>
        : null}
      </div>
      {typeof cartItems[id] === 'undefined' ? 
          <button 
                className="addToCartBttn" 
                onClick={
                  () => dispatch(addToCart({
                                              id : id,
                                              productName: productName,
                                              price: price,
                                              itemToCartQuantity : itemQuantity
                                            })
                                          )
                }>
          Add To Cart
          </button>
      : "Already in cart ("+cartItems[id].itemToCartQuantity+")"}
      
    </div>
  );
};
