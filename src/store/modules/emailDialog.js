export const EMAIL_EDIT_MODE = "email/editMode";
export const EMAIL_ADD_MODE = "email/addMode";

const initialState = {};

export default function emailDialogReducer(
  state = initialState,
  dispatchedAction
) {
  switch (dispatchedAction.type) {
    case EMAIL_ADD_MODE:
      return { ...state, mode: "add", payload: {} };
    case EMAIL_EDIT_MODE:
      return { ...state, mode: "edit", payload: dispatchedAction.payload };
    default:
      return state;
  }
}

export const emailDialogEditMode = (payload) => {
  return {
    type: EMAIL_EDIT_MODE,
    payload: payload,
  };
};

export const emailDialogAddMode = () => {
  return {
    type: EMAIL_ADD_MODE,
  };
};

export const selectEmailDialogMode = (state) => state.emailDialog.mode;
export const selectEmailEditData = (state) => state.emailDialog.payload