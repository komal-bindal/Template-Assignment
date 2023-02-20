import EmailBox from "../dialogs/emailBox/EmailBox";
import HtmlBox from "../dialogs/htmlbox/HtmlBox";
import "./Table.css";
import TableActions from "./TableActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailDialogEditMode } from "../../actions/emailDialogBox.actions";
import { htmlDialogEditMode } from "../../actions/htmlDialogBox.actions";
import DeleteBox from "../dialogs/deleteBox/DeleteBox";
function Table(props) {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  const activeTab = useSelector((state) => state.navigationTabReducer.tab);

  const dispatch = useDispatch();

  function handleEditDialogOpen() {
    if (isDeleteDialogOpen) {
      setDeleteDialogOpen(!isDeleteDialogOpen);
    }
    setEditDialogOpen((prev) => !prev);
  }

  function handleDeleteDialogOpen() {
    if (isEditDialogOpen) {
      setEditDialogOpen(!isEditDialogOpen);
    }
    setDeleteDialogOpen((prev) => !prev);
  }

  function handleEditDialog(data) {
    handleEditDialogOpen();
    if (!isEditDialogOpen) {
      if (activeTab === "email") {
        dispatch(emailDialogEditMode(data));
      } else {
        dispatch(htmlDialogEditMode(data));
      }
      console.log("opened");
    } else {
      console.log("closed");
    }
  }

  function handleDeleteDialog(data) {
    handleDeleteDialogOpen();
    setDeleteData(data);
    console.log("delete");
  }
  function handleOverlay() {
    setEditDialogOpen(false)
    setDeleteDialogOpen(false)
}

  return (
    <div>
      <div className={(isDeleteDialogOpen||isEditDialogOpen)?"overlay":""} onClick = {handleOverlay}></div>
      <table className="table-container">
        <thead>
          <tr>
            <th>{props.header1}</th>
            <th>{props.header2}</th>
            <th>{props.header3}</th>
          </tr>
        </thead>
        <tbody>
          {props.content.map(function (item, i) {
            return (
              <tr key = {i}>
                <td className="table-description">
                  {item[props.header1.toLowerCase()]}
                </td>
                <td className="table-description">
                  {item[props.header2.toLowerCase()]}
                </td>
                <td className="table-description">
                  <TableActions
                    data={item}
                    handleEditDialog={(data) => handleEditDialog(data)}
                    handleDeleteDialog={(data) => handleDeleteDialog(data)}
                  ></TableActions>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isEditDialogOpen && activeTab === "email" && (
        <EmailBox toggleDialog={handleEditDialogOpen}></EmailBox>
      )}
      {isEditDialogOpen && activeTab === "html" && (
        <HtmlBox toggleDialog={handleEditDialogOpen}></HtmlBox>
      )}
      {isDeleteDialogOpen && (
        <DeleteBox
          data={deleteData}
          toggleDialog={handleDeleteDialogOpen}
        ></DeleteBox>
      )}
    </div>
  );
}
export default Table;
