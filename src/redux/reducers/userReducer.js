const defaultState = {
  email: null,
  id: null,
  token: null,
};

const CREATE_USER = "CREATE_USER";
const REMOVE_USER = "REMOVE_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {...action.payload};
    case REMOVE_USER:
      return { email: null, id: null, token: null };
    default:
      return state;
  }
};

export const createUser = (payload) => ({
  type: CREATE_USER,
  payload,
});
export const removeUser = (payload) => ({
  type: REMOVE_USER,
  payload,
});
