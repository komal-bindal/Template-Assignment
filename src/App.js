import "./App.css";
import Header from "./components/header/Header";
import Email from "./pages/email/Email";
import Html from "./pages/html/Html";
import { useSelector } from "react-redux";
function App() {

  const activeTab = useSelector((state) => state.navigationTabReducer.tab)
  let isEmailActive = true;
  if (activeTab === "html") {
    isEmailActive = false;
  } else {
    isEmailActive = true;
  } 
  return (
    <div className="App">
      <Header></Header>
      <main>
        {isEmailActive && <Email />}
        {!isEmailActive && <Html />}
      </main>

\    </div>
  );
}

export default App;
