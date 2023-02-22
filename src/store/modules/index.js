import email from "./email";
import emailDialog from "./emailDialog";
import htmlDialog from "./htmlDialog";
import html from "./html";
import navigationTab from "./navigationTab";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  navigationTab,
  email,
  emailDialog,
  html,
  htmlDialog,
});
