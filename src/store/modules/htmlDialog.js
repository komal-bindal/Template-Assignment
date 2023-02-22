export const HTML_ADD_MODE = "html/addMode";
export const HTML_EDIT_MODE = "html/editMode";
const initialState = {};

export default function htmlDialogReducer(
  state = initialState,
  dispatchedAction
) {
  switch (dispatchedAction.type) {
    case HTML_ADD_MODE:
      return { ...state, mode: "add", payload: {} };
    case HTML_EDIT_MODE:
      return { ...state, mode: "edit", payload: dispatchedAction.payload };
    default:
      return state;
  }
}

export const htmlDialogEditMode = (payload) => {
  return {
    type: HTML_EDIT_MODE,
    payload: payload,
  };
};

export const htmllDialogAddMode = () => {
  return {
    type: HTML_ADD_MODE,
  };
};

export const selectHtmlDialogMode = (state) => state.htmlDialog.mode;
export const selectHtmlEditData = (state) => state.htmlDialog.payload;