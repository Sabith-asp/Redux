const initialState = { count: 0 };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return (state = initialState);
    default:
      return state;
  }
};

export default Reducer;
