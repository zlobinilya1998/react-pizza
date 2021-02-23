import { createStore, combineReducers } from "redux";
import appReducer from "./reducers/appReducer";

let store = createStore(combineReducers({ appReducer }));
export default store;

window.store = store;
