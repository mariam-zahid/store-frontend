import { callApi } from "../utils/apiUtils";
import userEndpoints from "../utils/endpoints/auth.endpoints";

export const userLogin = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.login,
    },
    body,
  })
    .then((loginResponse) => {
      localStorage.setItem("accessToken", loginResponse.accessToken);
      localStorage.setItem("refreshToken", loginResponse.refreshToken);
      localStorage.setItem("user", JSON.stringify(loginResponse?.data));
      localStorage.setItem("authenticated", "true");
      return loginResponse;
    })
    .catch((error) => {
      throw error?.response;
    });
};

export const userSignup = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.register,
    },
    body,
  })
    .then((registerResponse) => {
      localStorage.setItem("accessToken", registerResponse.accessToken);
      localStorage.setItem("refreshToken", registerResponse.refreshToken);
      localStorage.setItem("user", JSON.stringify(registerResponse?.user));
      localStorage.setItem("authenticated", "true");
      return registerResponse;
    })
    .catch((error) => {
      throw error?.response;
    });
};
