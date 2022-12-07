import { callApi } from "../utils/apiUtils";
import userEndpoints from "../utils/endpoints/user.endpoints";

export const getMe = async () => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.me,
    },
  })
    .then((getMeResponse) => {
      localStorage.setItem("user", JSON.stringify(getMeResponse?.data));
      localStorage.setItem("authenticated", "true");
      return getMeResponse;
    })
    .catch((error) => {
      localStorage.removeItem("user");
      localStorage.setItem("authenticated", "false");
      throw error?.response;
    });
};
