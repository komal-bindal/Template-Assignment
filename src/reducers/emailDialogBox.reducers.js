const initialState = {};

const emailDialogBoxReducer = (state = initialState, dispatchedAction) => {
  // const content = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case "EMAIL_ADD_MODE":
      return { ...state, mode: "add" };
    case "EMAIL_EDIT_MODE":
      return { ...state, mode: "edit", payload: dispatchedAction.payload };
    default:
      return state;
  }
};

export default emailDialogBoxReducer;
