import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer";
import { loggerMiddlewar, loggerMiddleware } from "./loggerMiddleware";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger));

export default store;
