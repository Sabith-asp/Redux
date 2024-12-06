import { produce } from "immer";

const initialCart = {
  items: [],
};

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case "addtocart":
      draft.items.push(action.payload);
      break;
    case "removefromcart":
      draft.items = draft.items.filter((item) => item.id !== action.id);
      break;
    case "resetcart":
      draft.items = [];
      break;
    default:
      break;
  }
}, initialCart);

export default cartReducer;
