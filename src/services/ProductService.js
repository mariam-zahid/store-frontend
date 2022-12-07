import { callApi } from "../utils/apiUtils";
import productsEndpoints from "../utils/endpoints/products.endpoints";

export const getProducts = ({ query }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getProducts,
    },
    query,
  });
};

export const getSingleProduct = ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getSingleProducts,
    },
    pathParams,
  });
};

export const getSingleVariant = ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getSingleVariant,
    },
    pathParams,
  });
};
export const getVariant = ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getVariant,
    },
    pathParams,
  });
};

export const getRelatedProduct = ({ pathParams }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getRelatedProducts,
    },
    pathParams,
  });
};

export const getProductByCategory = ({ query }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getProductByCategory,
    },
    query,
  });
};
export const getProductCategory = ({ query }) => {
  return callApi({
    uriEndPoint: {
      ...productsEndpoints.getProductCategory,
    },
    query,
  });
};
