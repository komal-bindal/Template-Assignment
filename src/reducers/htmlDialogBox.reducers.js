const initialState = {};

const htmlDialogBoxReducer = (state = initialState, dispatchedAction) => {
  // const content = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case "HTML_ADD_MODE":
      return { ...state, mode: "add" };
    case "HTML_EDIT_MODE":
      return { ...state, mode: "edit", payload: dispatchedAction.payload };
    default:
      return state;
  }
};

export default htmlDialogBoxReducer;
