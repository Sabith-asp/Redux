import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
});
console.log(rootReducer);

export default rootReducer;
