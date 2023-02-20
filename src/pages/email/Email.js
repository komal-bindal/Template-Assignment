import Button from "../../components/button/Button";
import EmailBox from "../../components/dialogs/emailBox/EmailBox";
import Search from "../../components/search/Search";
import { useEffect, useState } from "react";
import "./Email.css";
import Table from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { emailDialogAddMode } from "../../actions/emailDialogBox.actions";

function Email() {
  const emails = useSelector((state) => state.emailReducer).emails;

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const dispatch = useDispatch();

  function toggleDialog() {
    setDialogOpen((isDialogOpen) => !isDialogOpen);
  }

  function handleAddClick() {
    dispatch(emailDialogAddMode(emails));
    toggleDialog();
  }

  useEffect(() => {
    if (searchText === "") {
      setVisibleData(emails);
    } else {
      const wildCardSymbols = [
        "(",
        ")",
        "[",
        "]",
        "\\",
        "+",
        "^",
        "$",
        "?",
        "*",
      ];
      let searchTextRegex = "";
      for (let i = 0; i < searchText.length; i++) {
        if (wildCardSymbols.includes(searchText.charAt(i))) {
          searchTextRegex = searchTextRegex + "\\" + searchText.charAt(i);
        } else {
          searchTextRegex = searchTextRegex + searchText.charAt(i);
        }
      }
      var data = [];
      emails.map((email) => {
        if (email.subject.search(searchTextRegex) !== -1) {
          data = [...data, email];
          console.log(email.name);
        } else {
          data = [...data];
        }
      });
      setVisibleData(data);
    }
  }, [emails, searchText]);

  function handleSearchTextChange(text) {
    setSearchText(text);
  }

  function handleOverlay() {
    setDialogOpen(false);
  }
  return (
    <div className="container">
      <div
        className={isDialogOpen ? "overlay" : ""}
        onClick={handleOverlay}
      ></div>
      <div className="nav">
        <Button
          buttonType="button"
          name="Add"
          onClick={handleAddClick}
        ></Button>
        <Search handleChange={(text) => handleSearchTextChange(text)}></Search>
      </div>
      <Table
        header1="Name"
        header2="Subject"
        header3="Actions"
        content={visibleData}
      ></Table>
      {isDialogOpen && <EmailBox toggleDialog={toggleDialog}></EmailBox>}
    </div>
  );
}
export default Email;
