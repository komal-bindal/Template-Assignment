import Button from "../../button/Button";
import "./EmailBox.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail, editEmail, selectEmails } from "../../../store/modules/email";
import { selectEmailDialogMode, selectEmailEditData } from "../../../store/modules/emailDialog";

function EmailBox(props) {
  const mode = useSelector(selectEmailDialogMode);
  const editData = useSelector(selectEmailEditData)
  const emails = useSelector(selectEmails);
  const dispatch = useDispatch();

  const [boxInfo, setBoxInfo] = useState({
    id: 0,
    name: "",
    subject: "",
    to: "",
    body: "",
  });

  const [isSubmit, setSubmit] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (mode === "edit") {
      setBoxInfo((prev) => {
        return {
          ...prev,
          id: editData.id,
          name: editData.name,
          subject: editData.subject,
          to: editData.to,
          body: editData.body,
        };
      });
    }
  }, [editData]);

  useEffect(() => {
    if (mode === "add") {
      setBoxInfo((prev) => {
        return {
          ...prev,
          id: emails.length + 1,
        };
      });
    }
  }, [emails.length]);

  function handleChange(event) {
    const { name, value } = event.target;
    setBoxInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleCancel() {
    props.toggleDialog();
  }

  useEffect(() => {
    setFormErrors(validate(boxInfo));
  }, [boxInfo]);

  function validate(values) {
    const errors = {};
    const regex = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.to) {
      errors.to = "To is required";
    } else if (!regex.test(values.to)) {
      errors.to = "Not a valid email";
    }
    if (!values.subject) {
      errors.subject = "Subject is required";
    }
    if (!values.body) {
      errors.body = "Body is required";
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (mode == "add") {
        dispatch(addEmail(boxInfo));
        console.log("added");
        props.toggleDialog();
      } else if (mode === "edit") {
        dispatch(editEmail(boxInfo));
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
    <div className="emailBox-container ">
      <h4 className="emailBox-heading">Add/Edit Email</h4>

      <form className="emailBox-body" onSubmit={handleSave}>
        <div className="emailBox-body-start">
          <div className="emailBox-inputBox">
            <label className="emailBox-label" htmlFor="name">
              Name
            </label>
            <input
              className="emailBox-input "
              id="name"
              name="name"
              type="text"
              required
              placeholder="Joe"
              value={boxInfo.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="emailBox-inputBox">
            <label className="emailBox-label" htmlFor="subject">
              Subject
            </label>
            <input
              className="emailBox-input "
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Enter Subject"
              value={boxInfo.subject}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div className="emailBox-body-start">
          <div className="emailBox-error ">{formErrors.name}</div>
          <div className="emailBox-error">{formErrors.subject}</div>
        </div>
        <div className="emailBox-inputBox">
          <label className="emailBox-label" htmlFor="to">
            To
          </label>
          <input
            className="emailBox-input "
            id="to"
            name="to"
            type="email"
            required
            placeholder="joe@gmail.com"
            value={boxInfo.to}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="emailBox-error">{formErrors.to}</div>

        <div className="emailBox-inputBox">
          <label className="emailBox-label" htmlFor="body">
            Body
          </label>
          <input
            className="emailBox-input "
            id="body"
            name="body"
            placeholder="Enter Text"
            required
            type="text"
            value={boxInfo.body}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="emailBox-error">{formErrors.body}</div>
      </form>

      <div className="emailBox-footer">
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
export default EmailBox;
