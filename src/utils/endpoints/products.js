const productsEndpoints = {
  getProducts: {
    uri: "/product/:id",
    method: "GET",
    version: "",
  },
  getSingleProducts: {
    uri: "/product/:id",
    method: "GET",
    version: "",
  },
  getRelatedProducts: {
    uri: "/product/related/:id",
    method: "GET",
    version: "",
  },
  getSingleVariant: {
    uri: "/product/:id",
    method: "GET",
    version: "",
  },
  getVariant: {
    uri: "/product/:id",
    method: "GET",
    version: "",
  },
  getProductByCategory: {
    uri: "/product/",
    method: "GET",
    version: "",
  },
  getProductCategory: {
    uri: "/product/category",
    method: "GET",
    version: "",
  },
};

export default productsEndpoints;
