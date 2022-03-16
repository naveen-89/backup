import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, checkInCart } from "../actions/cartActions";

const ViewProductCard = () => {
  const productData = useSelector((state) => {
    return state.getProductData;
  });
  const cartList = useSelector((state) => {
    return state.getCartData;
  });
  const goToCart = useSelector((state) => {
    return state.checkInCart;
  });
  const dispatch = useDispatch();
  console.log("productData", productData);
  console.log("cartData", cartList);
  const { title, price, image } = productData;
  useEffect(() => {
    dispatch(checkInCart({ productData, cartList }));
  }, [productData, cartList]);

  return (
    <>
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
          {goToCart ? (
            <Link to="/cart">
              <button className="btn btn-outline-primary">Go To Cart</button>
            </Link>
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                dispatch(addToCart(productData));
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewProductCard;
