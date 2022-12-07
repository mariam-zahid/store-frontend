import { callApi } from "../utils/apiUtils";
import cartEndpoints from "../utils/endpoints/cart.endpoints";

export const addToCart = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...cartEndpoints.addToCart,
    },
    body,
  });
};

export const getCart = async () => {
  return callApi({
    uriEndPoint: {
      ...cartEndpoints.getCart,
    },
  });
};

export const updateCartItem = async ({ pathParams, body }) => {
  return callApi({
    uriEndPoint: {
      ...cartEndpoints.updateCartItem,
    },
    pathParams,
    body,
  });
};

export const deleteCartItem = async ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...cartEndpoints.deleteCartItem,
    },
    pathParams,
  });
};
