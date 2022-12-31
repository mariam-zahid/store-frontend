import { callApi } from "../utils/apiUtils";
import orderEndpoints from "../utils/endpoints/order.endpoints";

export const createOrder = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...orderEndpoints.createOrder,
    },
    body,
  });
};

export const getOrders = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...orderEndpoints.getOrders,
    },
  });
};
