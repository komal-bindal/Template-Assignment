export const addHtml = (payload) => {
  return {
    type: "ADD_HTML",
    payload: payload,
  };
};

export const editHtml = (payload) => {
  return {
    type: "EDIT_HTML",
    payload: payload,
  };
};

export const deleteHtml = (payload) => {
  return {
    type: "DELETE_HTML",
    payload: payload,
  };
};
