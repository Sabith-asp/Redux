import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Counter from "./component/Counter";
import Login from "./component/Login";

function App() {
  return (
    <>
      <Provider store={store}>
        <Login />
        <Counter />
      </Provider>
    </>
  );
}

export default App;
