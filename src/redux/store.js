import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

// project imports
import quoteReducer from "./reducer";

const store = createStore(quoteReducer, applyMiddleware(thunk));

export default store;
