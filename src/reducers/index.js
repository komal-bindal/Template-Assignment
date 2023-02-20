import { combineReducers } from "redux";
import navigationTabReducer from "./navigationTab.reducers";
import emailReducer from "./email.reducers";
import emailDialogBoxReducer from "./emailDialogBox.reducers";
import htmlDialogBoxReducer from "./htmlDialogBox.reducers";
import htmlReducer from "./html.reducers";
export const reducer = combineReducers({
  navigationTabReducer,
  emailReducer,
  emailDialogBoxReducer,
  htmlReducer,
  htmlDialogBoxReducer,
});
