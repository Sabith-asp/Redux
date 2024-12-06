const initialLoginState = {
  isLogin: false,
};

const loginReducer = (login = initialLoginState, action) => {
  switch (action.type) {
    case "login":
      return { ...login, isLogin: true };
    case "logout":
      return { ...login, isLogin: false };
    default:
      return login;
  }
};

export default loginReducer;
