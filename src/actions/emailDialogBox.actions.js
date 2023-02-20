export const emailDialogEditMode = (payload) => {
  return {
    type: "EMAIL_EDIT_MODE",
    payload: payload,
  };
};

export const emailDialogAddMode = () => {
  return {
    type: "EMAIL_ADD_MODE",
  };
};
