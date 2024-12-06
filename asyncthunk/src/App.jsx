import "./App.css";
import Products from "./components/Products";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Products />
      </Provider>
    </>
  );
}

export default App;
