const wishlistEndpoints = {
  addToWishlist: {
    uri: "/wishlist/:productId",
    method: "POST",
    version: "",
  },
  deleteFromWishlist: {
    uri: "/wishlist/:productId",
    method: "DELETE",
    version: "",
  },
  getWishlist: {
    uri: "/wishlist",
    method: "GET",
    version: "",
  },
};

export default wishlistEndpoints;
