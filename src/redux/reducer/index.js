import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});
// This would produce the following state object

export default rootReducer;