import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  SET_USER_DETAILS,
  REMOVE_USER_DETAILS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import { SET_AUTH, CLEAR_AUTH } from "../constants/authenticationConstants";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://shivaz-ecommerce-api.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("access", data.accessToken);
      localStorage.setItem("refresh", data.refreshToken);
      localStorage.setItem("userInfo", JSON.stringify(data.user));

      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
      dispatch({
        type: SET_USER_DETAILS,
        payload: data.user,
      });
      dispatch({
        type: SET_AUTH,
      });

      localStorage.setItem("authenticated", "true");
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.error.message
            ? error.response.data.error.message
            : error.message,
      });
    }
  };

export const logout = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        refreshtoken: localStorage.getItem("refresh"),
      },
    };
    await axios.delete(
      "https://shivaz-ecommerce-api.herokuapp.com/api/auth/logout",
      config
    );
    dispatch({
      type: REMOVE_USER_DETAILS,
    });
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("userInfo");
    dispatch({
      type: CLEAR_AUTH,
    });
    localStorage.removeItem("authenticated");
  } catch (error) {}
};

export const register =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://shivaz-ecommerce-api.herokuapp.com/api/auth/register",
        { firstName, lastName, email, password },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_USER_DETAILS,
        payload: data.user,
      });

      localStorage.setItem("access", JSON.stringify(data.accessToken));
      localStorage.setItem("refresh", JSON.stringify(data.refreshToken));
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      dispatch({
        type: SET_AUTH,
      });

      localStorage.setItem("authenticated", "true");
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.error.message
            ? error.response.data.error.message
            : error.message,
      });
    }
  };
