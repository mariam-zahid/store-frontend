const cartEndpoints = {
  getCart: {
    uri: "/cart",
    method: "GET",
    version: "",
  },
  addToCart: {
    uri: "/cart",
    method: "POST",
    version: "",
  },
  updateCartItem: {
    uri: "/cart/:cartItemId",
    method: "PUT",
    version: "",
  },
  deleteCartItem: {
    uri: "/cart/:cartItemId",
    method: "DELETE",
    version: "",
  },
};

export default cartEndpoints;
