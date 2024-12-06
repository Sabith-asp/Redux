import { createStore } from "redux";

// Initial state
const initialState = { count: 0 };

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

// Log the initial state
console.log("Initial State:", store.getState());

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  console.log("State changed:", store.getState());
});

// Dispatch actions to update the state
store.dispatch({ type: "INCREMENT", payload: 1 });
store.dispatch({ type: "INCREMENT", payload: 2 });
store.dispatch({ type: "DECREMENT", payload: 1 });

// Unsubscribe from updates
unsubscribe();

// Dispatch another action (no listener now)
store.dispatch({ type: "INCREMENT", payload: 5 });
