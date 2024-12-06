import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./productThunk";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (status === "loading") return <h1>Loading</h1>;
  if (status === "failed") return <h1>Failed: {error}</h1>;

  return (
    <div>
      <h1>Products</h1>
      {products?.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
