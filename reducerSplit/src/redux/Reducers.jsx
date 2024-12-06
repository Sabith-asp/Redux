const initialState = {
  isLogin: true,
  count: 0,
};

const loginReducer = (login = true, action) => {
  if (action.type === "changeStatus") {
    return login ? false : true;
  }
  return login;
};
const countReducer = (count = 0, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return 0;
    default:
      return count;
  }
};

const Reducers = (state = initialState, action) => {
  return {
    isLogin: loginReducer(state.isLogin, action),
    count: countReducer(state.count, action),
  };
};

export default Reducers;
