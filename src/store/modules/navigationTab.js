export const EMAIL_TAB = "tab/email";
export const HTML_TAB = "tab/html";

const initialState = {
  tab: "email",
};

export default function navigationTabReducer(
  state = initialState,
  dispatchedAction
) {
  switch (dispatchedAction.type) {
    case EMAIL_TAB:
      return { ...state, tab: "email" };
    case HTML_TAB:
      return { ...state, tab: "html" };
    default:
      return state;
  }
}

export const switchToEmailTab = () => {
  return {
    type: EMAIL_TAB,
  };
};

export const switchToHtmlTab = () => {
  return {
    type: HTML_TAB,
  };
};
export const selectNavigationTab = (state) => state.navigationTab.tab