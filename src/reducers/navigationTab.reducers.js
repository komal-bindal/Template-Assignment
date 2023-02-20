const initialState = {
  tab: "email",
};

const navigationTabReducer = (state = initialState, dispatchedAction) => {
  switch (dispatchedAction.type) {
    case "EMAIL":
      return { ...state, tab: "email" };
    case "HTML":
      return { ...state, tab: "html" };
    default:
      return state;
  }
};

export default navigationTabReducer;
