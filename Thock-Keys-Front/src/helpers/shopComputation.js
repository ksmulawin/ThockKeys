export const computeCartItems = (item_price = 0,quantity = 0) => {
    return item_price * quantity;
}

export const computeCartTotal = (cartItems) => {
    let total = 0;
    if(Object.keys(cartItems).length > 0) {
       for(let c in cartItems) {
        total += parseFloat(cartItems[c].base_price) * parseFloat(cartItems[c].itemToCartQuantity);
       }
    }
    return total.toFixed(2);
}