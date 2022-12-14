import React from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../reducers/CartReducers";
import { numberInputs } from "../../helpers/filterNumberFields";

export const CartItem = (props) => {
  const { id, productName, price, productImage,stock } = props.data;
  const { itemToCartQuantity,base_price } = props.cart;
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${base_price}</p>
        <div className="countHandler">
          <button disabled={itemToCartQuantity === 0} onClick={() => {
                                  dispatch(updateCart({
                                                        id : id,
                                                        itemToCartQuantity : itemToCartQuantity - 1,
                                                        base_price : price
                                                      })
                                            )
                                    }
                            }> - </button>
          <input
            value={itemToCartQuantity}
            onKeyDown={(e) => {numberInputs(e)}}
            onChange={(e) => {
                                dispatch(updateCart({
                                  id : id,
                                  itemToCartQuantity : e.target.value !== "" ? parseInt(e.target.value) : 0,
                                  base_price : price
                                })
                      )
            }}
          />
          <button disabled={itemToCartQuantity === stock} onClick={() => {
                                  dispatch(updateCart({
                                                        id : id,
                                                        itemToCartQuantity : itemToCartQuantity + 1,
                                                        base_price : price
                                                      })
                                            )
                                    }
                            }> + </button>
        </div>
      </div>
    </div>
  );
};
