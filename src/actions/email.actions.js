export const addEmail = (payload) => {
  return {
    type: "ADD_EMAIL",
    payload: payload,
  };
};

export const editEmail = (payload) => {
  return {
    type: "EDIT_EMAIL",
    payload: payload,
  };
};

export const deleteEmail = (payload) => {
  return {
    type: "DELETE_EMAIL",
    payload: payload,
  };
};
