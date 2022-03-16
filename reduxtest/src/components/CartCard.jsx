import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../actions/cartActions";

const CartCard = ({ val }) => {
  const dispatch = useDispatch();
  const { image, price, title, quantity } = val;

  return (
    <div className="card m-4" style={{ width: "20%" }}>
      <img
        className="card-img-top"
        src={image}
        alt="Unwanted err"
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <b>${price}</b>
        </h6>
      </div>
      <div className="card-footer d-flex">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            dispatch(decrementCart(val));
          }}
        >
          -
        </button>
        <h2>{quantity}</h2>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            dispatch(incrementCart(val));
          }}
        >
          +
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            dispatch(removeFromCart(val));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
