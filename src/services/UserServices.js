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

export const getMyAddresses = async () => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.getAddresses,
    },
  });
};

export const createNewAddress = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.createAddress,
    },
    body,
  });
};

export const updateAddress = async ({ body, pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.updateAddress,
    },
    body,
    pathParams,
  });
};

export const deleteAddress = async ({ body, pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.deleteAddress,
    },
    pathParams,
  });
};

export const setDefaultAddress = async ({ body, pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.setDefaultAddress,
    },
    pathParams,
  });
};
