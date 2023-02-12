import { callApi } from "../utils/apiUtils";
import wishlistEndpoints from "../utils/endpoints/wishlist.endpoints";

export const addToWishlist = async ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...wishlistEndpoints.addToWishlist,
    },
    pathParams,
  });
};

export const deleteFromWishlist = async ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...wishlistEndpoints.deleteFromWishlist,
    },
    pathParams,
  });
};

export const getWishlist = async () => {
  return callApi({
    uriEndPoint: {
      ...wishlistEndpoints.getWishlist,
    },
  });
};
