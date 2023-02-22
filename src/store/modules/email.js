export const ADD_EMAIL = "email/add";
export const EDIT_EMAIL = "email/edit";
export const DELETE_EMAIL = "email/delete";

const initialState = { emails: [] };

export default function emailReducer(state = initialState, dispatchedAction) {
  const email = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case ADD_EMAIL:
      return { ...state, emails: [...state.emails, email] };
    case EDIT_EMAIL:
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
    case DELETE_EMAIL:
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
}

export const addEmail = (payload) => {
  return {
    type: ADD_EMAIL,
    payload: payload,
  };
};

export const editEmail = (payload) => {
  return {
    type: EDIT_EMAIL,
    payload: payload,
  };
};

export const deleteEmail = (payload) => {
  return {
    type: DELETE_EMAIL,
    payload: payload,
  };
};

export const selectEmails = state => state.email.emails
