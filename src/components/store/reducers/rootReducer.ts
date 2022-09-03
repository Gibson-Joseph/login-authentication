import { combineReducers } from "redux";
import loginReducer from "./Login.reducer";
const RootReducer = combineReducers({
  login: loginReducer,
});
export default RootReducer;
