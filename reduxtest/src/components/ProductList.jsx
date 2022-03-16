import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const ProductList = () => {
  const productList = useSelector((state) => {
    return state.getProductList;
  });
  const searchTerm = useSelector((state) => {
    return state.getSearchTerm;
  });
  const list =
    searchTerm.length === 0
      ? productList
      : productList.filter(({ title }) =>
          title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {list.map((val) => {
        return <Card key={val.id} val={val} />;
      })}
    </div>
  );
};

export default ProductList;
