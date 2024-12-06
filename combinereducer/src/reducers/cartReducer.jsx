const initialCart = {
  items: [],
};

const cartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case "addtocart":
      return { ...cart, items: [...cart.items, action.payload] };
    case "removefromcart":
      return {
        ...cart,
        items: cart.items.filter((item) => item.id !== action.id),
      };
    case "resetcart":
      return initialCart;
    default:
      return cart;
  }
};

export default cartReducer;
