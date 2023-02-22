import Button from "../../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmail } from "../../../store/modules/email";
import "./DeleteBox.css";
import { deleteHtml } from "../../../store/modules/html";
import { selectNavigationTab } from "../../../store/modules/navigationTab";

function DeleteBox(props) {
  const activeTab = useSelector(selectNavigationTab);
  const dispatch = useDispatch();

  function handleDelete() {
    if (activeTab == "email") {
      dispatch(deleteEmail(props.data));
    } else {
      dispatch(deleteHtml(props.data));
    }
    props.toggleDialog();
  }

  function handleCancel() {
    props.toggleDialog();
  }

  return (
    <div className="deleteBox-container">
      <h4 className="deleteBox-heading">Delete</h4>
      <div className="deleteBox-desc">
        <p>Are you sure you want to delete?</p>
      </div>
      <div className="deleteBox-footer">
        <Button
          buttonType="submit"
          name="Delete"
          onClick={handleDelete}
        ></Button>
        <Button
          buttonType="button"
          name="Cancel"
          onClick={handleCancel}
        ></Button>
      </div>
    </div>
  );
}
export default DeleteBox;
