import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TableActions.css";

function TableActions(props) {
  function handleEditClick() {
    props.handleEditDialog(props.data);
  }

  function handleDeleteClick() {
    props.handleDeleteDialog(props.data);
  }

  return (
    <div className="tableAction-container">
      <EditIcon onClick={handleEditClick}></EditIcon>
      <DeleteIcon onClick={handleDeleteClick}></DeleteIcon>
    </div>
  );
}
export default TableActions;
