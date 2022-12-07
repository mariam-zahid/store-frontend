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
      localStorage.setItem("user", JSON.stringify(loginResponse?.user));
      localStorage.setItem("authenticated", "true");
      return loginResponse;
    })
    .catch((error) => {
      throw error?.response;
    });
};
