import { SET_AUTH, CLEAR_AUTH } from "../constants/authenticationConstants";

const authInfoFromStorage = localStorage.getItem("authenticated") || "false";

const initialState = {
  authenticated: authInfoFromStorage,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, authenticated: "true" };
    case CLEAR_AUTH:
      return { ...state, authenticated: "false" };
    default:
      return state;
  }
};
