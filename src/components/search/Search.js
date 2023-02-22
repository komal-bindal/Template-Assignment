import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./Search.css";
function Search(props) {
  const [searchText, setSearchText] = useState("");
  function handleChange(event) {
    setSearchText(event.target.value);
    props.handleChange(event.target.value);
  }
  return (
    <div className="search-box">
      <SearchIcon></SearchIcon>
      <input
        className="search-input"
        name="search"
        value={searchText}
        type="text"
        placeholder="Search"
        onChange={(event) => handleChange(event)}
      ></input>
    </div>
  );
}

export default Search;
