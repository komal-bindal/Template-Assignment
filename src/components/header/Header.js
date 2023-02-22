import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectNavigationTab,
  switchToEmailTab,
  switchToHtmlTab,
} from "../../store/modules/navigationTab";

function Header() {
  const dispatch = useDispatch();

  const activeTab = useSelector(selectNavigationTab);

  let isEmailActive = true;
  if (activeTab === "html") {
    isEmailActive = false;
  } else {
    isEmailActive = true;
  }

  return (
    <div className="header">
      <h1 className="heading">Templates</h1>
      <div className="tab-panel">
        <div
          className={isEmailActive ? "active tab" : "tab"}
          onClick={() => dispatch(switchToEmailTab())}
        >
          Email
        </div>
        <div
          className={isEmailActive ? " tab" : " active tab"}
          onClick={() => dispatch(switchToHtmlTab())}
        >
          HTML
        </div>
      </div>
    </div>
  );
}
export default Header;
