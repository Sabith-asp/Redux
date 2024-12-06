import React from "react";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 49.99,
    category: "Electronics",
    image: "https://example.com/images/wireless-earbuds.jpg",
    description:
      "High-quality wireless earbuds with noise cancellation and long battery life.",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 29.99,
    category: "Accessories",
    image: "https://example.com/images/gaming-mouse.jpg",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
  },
  {
    id: 3,
    name: "Yoga Mat",
    price: 19.99,
    category: "Fitness",
    image: "https://example.com/images/yoga-mat.jpg",
    description:
      "Non-slip yoga mat with extra cushioning for comfort during workouts.",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 149.99,
    category: "Electronics",
    image: "https://example.com/images/smartwatch.jpg",
    description:
      "Feature-packed smartwatch with heart rate monitor and GPS tracking.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 39.99,
    category: "Electronics",
    image: "https://example.com/images/bluetooth-speaker.jpg",
    description:
      "Portable Bluetooth speaker with deep bass and waterproof design.",
  },
];

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {products.map((product) => (
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
            onClick={() => dispatch({ type: "addtocart", payload: product })}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
