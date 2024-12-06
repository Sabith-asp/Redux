import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import store from "./store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
