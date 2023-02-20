import "./Header.css"
import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { switchToEmail, switchToHtml } from "../../actions/navigationTab.actions";
import navigationTabReducer from "../../reducers/navigationTab.reducers";


function Header() {

  const dispatch = useDispatch();

  const activeTab =  useSelector((state) => state.navigationTabReducer.tab);
  
  let isEmailActive = true;
  if (activeTab === "html") {
    isEmailActive = false;
  } else  {
    isEmailActive = true;
  } 

  return (
    <div className="header">
      <h1 className="heading">Templates</h1>
      <div className="tab-panel">
        <div
          className={ isEmailActive? "active tab" : "tab"}
          onClick={() => dispatch(switchToEmail())}
        >
          Email
        </div>
        <div
          className={isEmailActive ? " tab" : " active tab"}
          onClick={() => dispatch(switchToHtml())}
        >
          HTML
        </div>
      </div>
    </div>
  );
}
export default Header;
