import Button from "../../components/button/Button";
import HtmlBox from "../../components/dialogs/htmlbox/HtmlBox";
import Search from "../../components/search/Search";
import { useEffect, useState } from "react";
import "./Html.css";
import Table from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { htmllDialogAddMode } from "../../actions/htmlDialogBox.actions";

function Html() {
  const htmls = useSelector((state) => state.htmlReducer).htmls;

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const dispatch = useDispatch();

  function toggleDialog() {
    setDialogOpen((isDialogOpen) => !isDialogOpen);
  }

  function handleAddClick() {
    dispatch(htmllDialogAddMode(htmls));
    toggleDialog();
  }

  useEffect(() => {
    if (searchText === "") {
      setVisibleData(htmls);
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
      htmls.map((html) => {
        if (html.description.search(searchTextRegex) !== -1) {
          data = [...data, html];
          console.log(html.name);
        }
      });
      setVisibleData(data);
    }
  }, [htmls, searchText]);

  function handleSearchTextChange(text) {
    setSearchText(text);
  }

  function handleOverlay() {
    setDialogOpen(false);
  }
  return (
    <div className="html-container">
      <div
        className={isDialogOpen ? "overlay" : ""}
        onClick={handleOverlay}
      ></div>

      <div className="html-nav">
        <Button
          buttonType="button"
          name="Add"
          onClick={handleAddClick}
        ></Button>
        <Search handleChange={(text) => handleSearchTextChange(text)}></Search>
      </div>
      <Table
        header1="Name"
        header2="Description"
        header3="Actions"
        content={visibleData}
      ></Table>
      {isDialogOpen && <HtmlBox toggleDialog={toggleDialog}></HtmlBox>}
    </div>
  );
}
export default Html;
