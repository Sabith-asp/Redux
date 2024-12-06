import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/dataThunk";

const Products = () => {
  const { data, status, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <h1>Loading</h1>;
  if (status === "failed") return <h1>Failed : {error}</h1>;

  return (
    <div className="">
      {data.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
