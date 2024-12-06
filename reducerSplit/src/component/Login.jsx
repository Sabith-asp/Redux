import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const status = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  console.log("login rendered");

  return (
    <>
      {status ? <button>Logout</button> : <button>Login</button>}
      <button onClick={() => dispatch({ type: "changeStatus" })}>
        Change status
      </button>
    </>
  );
};

export default Login;
