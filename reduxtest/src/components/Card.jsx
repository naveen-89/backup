import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setViewCurrentProduct } from "../actions/cartActions";

const Card = ({ val }) => {
  const dispatch = useDispatch();
  const { id, image, price, category, description } = val;
  return (
    <>
      <div className="card m-4" style={{ width: "20%" }}>
        <img
          className="card-img-top"
          src={image}
          alt="Unwanted error occ"
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{category}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <b>${price}</b>
          </h6>
          <p className="card-text">
            {description.substring(0, 100).length <= 100
              ? description.substring(0, 100).concat("...")
              : description}
          </p>
          <Link to={`/product/${id}`}>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                dispatch(setViewCurrentProduct(val));
              }}
            >
              ViewProduct
            </button>
          </Link>
          {/* {!goToCart ? (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setGoToCart(true);
                dispatch(addToCart(val));
                dispatch(calculateCartData(cart));
              }}
            >
              AddToCart
            </button>
          ) : (
            <Link to="/cart">
              <button className="btn btn-outline-primary">GoToCart</button>
            </Link>
          )} */}

          {/* <button
            className="btn btn-outline-primary"
            onClick={() => {
              setGoToCart(false);
              dispatch(removeFromCart(val));
              dispatch(calculateCartData(cart));
            }}
          >
            RemoveFromCart
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Card;
