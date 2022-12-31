const userEndpoints = {
  me: {
    uri: "/user/me",
    method: "GET",
    version: "",
  },
  getAddresses: {
    uri: "/user/address",
    method: "GET",
    version: "",
  },
  createAddress: {
    uri: "/user/address",
    method: "POST",
    version: "",
  },
  updateAddress: {
    uri: "/user/address/:addressId",
    method: "PUT",
    version: "",
  },
  deleteAddress: {
    uri: "/user/address/:addressId",
    method: "DELETE",
    version: "",
  },
  setDefaultAddress: {
    uri: "/user/address/default/:addressId",
    method: "PUT",
    version: "",
  },
};

export default userEndpoints;
