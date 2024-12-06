import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  console.log(login);

  return (
    <div>
      <h1>Navbar</h1>
      <h5>{login.isLogin ? "welcome user" : "login now"}</h5>
      {login.isLogin ? (
        <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
      ) : (
        <button onClick={() => dispatch({ type: "login" })}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
