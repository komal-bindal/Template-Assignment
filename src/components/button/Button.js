import AddIcon from "@mui/icons-material/Add";
import "./Button.css";
function Button(props) {
  return (
    <button type={props.buttonType} className="button" onClick={props.onClick}>
      {props.name === "Add" && <AddIcon></AddIcon>}
      <div>{props.name}</div>
    </button>
  );
}

export default Button;
