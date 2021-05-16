import { SET_AUTH, CLEAR_AUTH } from "../constants/authenticationConstants";

export const setAuth = () => {
  return {
    type: SET_AUTH,
  };
};

export const clearAuth = () => {
  return {
    type: CLEAR_AUTH,
  };
};
