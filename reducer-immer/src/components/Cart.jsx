import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
      {cart.items.map((product) => (
        <div
          style={{
            backgroundColor: "gray",
            padding: "10px",
            marginTop: "10px",
            color: "WHITE",
          }}
        >
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <button
            onClick={() => dispatch({ type: "removefromcart", id: product.id })}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
