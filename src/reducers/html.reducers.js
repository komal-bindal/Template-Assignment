const initialState = { htmls: [] };

const htmlReducer = (state = initialState, dispatchedAction) => {
  const html = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case "ADD_HTML":
      return { ...state, htmls: [...state.htmls, html] };
    case "EDIT_HTML":
      return {
        ...state,
        htmls: state.htmls.map((h, i) => {
          if (h.id === html.id) {
            return html;
          } else {
            return h;
          }
        }),
      };
    case "DELETE_HTML":
      let newState = state.htmls.filter((h, i) => {
        if (h.id != html.id) {
          return h;
        }
      });
      newState = newState.map((html, i) => {
        return {
          ...html,
          id: i + 1,
        };
      });
      return {
        ...state,
        htmls: [...newState],
      };
    default:
      return state;
  }
};

export default htmlReducer;
