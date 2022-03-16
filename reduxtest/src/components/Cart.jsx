import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const cartList = useSelector((state) => {
    return state.getCartData;
  });
  const cartAmount = useSelector((state) => {
    return state.getCartAmount;
  });

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {cartList.map((cartItem) => {
          return <CartCard key={cartItem.id} val={cartItem} />;
        })}
      </div>
      <h1>Total = {cartAmount}</h1>
    </>
  );
};

export default Cart;
