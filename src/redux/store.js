import { legacy_createStore as createStore } from "redux";
import loremReducer from "./reducer/loremReducer";

const store = createStore(loremReducer);

export default store;