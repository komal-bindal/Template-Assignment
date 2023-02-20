const initialState = { emails: [] };

const emailReducer = (state = initialState, dispatchedAction) => {
  const email = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case "ADD_EMAIL":
      return { ...state, emails: [...state.emails, email] };
    case "EDIT_EMAIL":
      return {
        ...state,
        emails: state.emails.map((e, i) => {
          if (e.id === email.id) {
            return email;
          } else {
            return e;
          }
        }),
      };
    case "DELETE_EMAIL":
      let newState = state.emails.filter((e, i) => {
        if (e.id != email.id) {
          console.log(i);
          return e;
        }
      });
      newState = newState.map((e, i) => {
        return {
          ...e,
          id: i + 1,
        };
      });
      return {
        ...state,
        emails: [...newState],
      };
    default:
      return state;
  }
};

export default emailReducer;
