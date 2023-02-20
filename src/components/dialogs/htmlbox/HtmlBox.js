import Button from "../../button/Button";
import "./HtmlBox.css";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHtml, editHtml } from "../../../actions/html.actions";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";

function HtmlBox(props) {
  const dataMode = useSelector((state) => state.htmlDialogBoxReducer);
  const htmls = useSelector((state) => state.htmlReducer.htmls);
  const dispatch = useDispatch();
  const [isSubmit, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [boxInfo, setBoxInfo] = useState({
    id: 0,
    name: "",
    description: "",
    html: "",
  });

  useEffect(() => {
    if (dataMode.mode === "edit") {
      setBoxInfo((prev) => {
        return {
          ...prev,
          id: dataMode.payload.id,
          name: dataMode.payload.name,
          description: dataMode.payload.description,
          html: dataMode.payload.html,
        };
      });
    }
  }, [dataMode.payload]);

  useEffect(() => {
    if (dataMode.mode === "add") {
      setBoxInfo((prev) => {
        return {
          ...prev,
          id: htmls.length + 1,
        };
      });
    }
  }, [htmls.length]);

  function handleChange(event) {
    const { name, value } = event.target;

    setBoxInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setFormErrors(validate(boxInfo));
  }

  function handleHTMLChange(value) {
    setBoxInfo((prev) => {
      return {
        ...prev,
        html: value,
      };
    });
  }

  useEffect(() => {
    setFormErrors(validate(boxInfo));
  }, [boxInfo]);

  function handleCancel() {
    props.toggleDialog();
  }

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.html) {
      errors.html = "HTML is required";
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (dataMode.mode == "add") {
        dispatch(addHtml(boxInfo));
        console.log("added");
        props.toggleDialog();
      } else if (dataMode.mode === "edit") {
        dispatch(editHtml(boxInfo));
        console.log("edited");
        props.toggleDialog();
      }
    } else {
      setSubmit(false);
    }
  }, [formErrors]);

  function handleSave() {
    setFormErrors(validate(boxInfo));
    setSubmit(true);
  }

  return (
    <div className="htmlBox-container">
      <div>
        <h4 className="htmlBox-heading">Add/Edit HTML</h4>
      </div>
      <form className="htmlBox-body" onSubmit={handleSave}>
        <div className="htmlBox-body-start">
          <div className="htmlBox-inputBox">
            <label className="htmlBox-label" htmlFor="name">
              Name
            </label>
            <input
              className="htmlBox-input "
              id="name"
              name="name"
              type="text"
              required
              placeholder="Joe"
              value={boxInfo.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div className="htmlBox-error">{formErrors.name}</div>

        <div className="htmlBox-inputBox">
          <label className="htmlBox-label" htmlFor="description">
            Description
          </label>
          <input
            className="htmlBox-input "
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            required
            value={boxInfo.description}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="htmlBox-error">{formErrors.description}</div>

        <div className="htmlBox-inputBox">
          <label className="htmlBox-label" htmlFor="html">
            HTML
          </label>
          <AceEditor
            id="html"
            placeholder="Write you HTML"
            mode="html"
            theme="monokai"
            name="html"
            value={boxInfo.html}
            onChange={(e) => handleHTMLChange(e)}
          ></AceEditor>
        </div>
        <div className="htmlBox-error">{formErrors.html}</div>
      </form>

      <div className="htmlBox-footer">
        <Button buttonType="submit" name="Save" onClick={handleSave}></Button>
        <Button
          buttonType="button"
          name="Cancel"
          onClick={handleCancel}
        ></Button>
      </div>
    </div>
  );
}
export default HtmlBox;
