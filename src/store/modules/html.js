export const ADD_HTML = "html/add";
export const EDIT_HTML = "html/edit";
export const DELETE_HTML = "html/delete";

const initialState = { htmls: [] };

export default function htmlReducer(state = initialState, dispatchedAction) {
  const html = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case ADD_HTML:
      return { ...state, htmls: [...state.htmls, html] };
    case EDIT_HTML:
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
    case DELETE_HTML:
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
}

export const addHtml = (payload) => {
  return {
    type: ADD_HTML,
    payload: payload,
  };
};

export const editHtml = (payload) => {
  return {
    type: EDIT_HTML,
    payload: payload,
  };
};

export const deleteHtml = (payload) => {
  return {
    type: DELETE_HTML,
    payload: payload,
  };
};
export const selectHtmls = (state) => state.html.htmls;
