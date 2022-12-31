import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import WrapperContainer from "../../Components/UI/WrapperContainer";

import { getCart } from "../../services/CartServices";
import { useAtom } from "jotai";
import { currentUser as userDetails } from "../../atoms/UserAtoms";
// import { debounce } from "lodash";
import AddressForm from "../../Components/AddressForm";

import Modal from "../../Components/UI/Modal";
import { useNavigate } from "react-router-dom";
import { createNewAddress, getMyAddresses } from "../../services/UserServices";
import { createOrder } from "../../services/OrderServices";

const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });
};

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createOrderLoading, setCreateOrderLoading] = useState(false);
  const [currentUser] = useAtom(userDetails);
  const [total, setTotal] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (!!currentUser._id) {
      // get cart details
      getCart().then((res) => {
        setCartItems(res?.data);
      });
      // get addresses
      getMyAddresses()
        .then((res) => {
          setAddresses(res.data);
          res.data.forEach((address) => {
            if (address.defaultAddress) {
              setSelectedAddress(address._id);
            }
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log("err in get address: ", err);
          setLoading(false);
        });
    } else {
      navigate("/account/login");
    }
  }, [currentUser._id]);
  useEffect(() => {
    if (cartItems.length) {
      let total = 0;
      cartItems.forEach((item) => {
        total += item?.variant?.price * item?.quantity;
      });
      setTotal(total);
    } else {
      // show error that cart is empty
    }
  }, [cartItems]);
  const handlePlaceOrder = () => {
    // e.preventDefault();
    setCreateOrderLoading(true);
    if (selectedAddress) {
      // place order
      createOrder({
        body: {
          address: selectedAddress,
        },
      })
        .catch((err) => {
          console.log("err in create order: ", err);
        })
        .finally(() => {
          setCreateOrderLoading(false);
        });
    } else {
      // show error
    }
  };
  return (
    <div>
      <WrapperContainer>
        {/* display addresses */}
        <div className={style.wrapper}>
          <div className={style.addressWrapper}>
            <h3>Select Shipping Address</h3>
            <div className={style.addresses}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {addresses && addresses.length > 0 && (
                    <>
                      {addresses.map((address) => {
                        const {
                          firstName,
                          lastName,
                          addressLine1,
                          apartment,
                          city,
                          state,
                          country,
                          pinCode,
                          phone,
                          email,
                        } = address.address;
                        return (
                          <div
                            key={address._id}
                            className={`${style.address} ${
                              selectedAddress === address._id
                                ? style.selected
                                : ""
                            }`}
                            onClick={() => setSelectedAddress(address._id)}
                          >
                            <input
                              type="radio"
                              value={address._id}
                              name="shippingAddress"
                              checked={selectedAddress === address._id}
                              onChange={() => setSelectedAddress(address._id)}
                            />
                            <label htmlFor="">
                              <div className={style.addressName}>
                                {firstName} {lastName}
                              </div>
                              <div className={style.addressDetails}>
                                {addressLine1}
                                {apartment ? `, ${apartment}` : ""}
                              </div>
                              <div className={style.addressDetails}>
                                {city}, {state}, {country} {pinCode}
                              </div>
                              <div className={style.addressDetails}>
                                Contact: {phone} | {email}
                              </div>
                            </label>
                            {address.defaultAddress && (
                              <span className={style.defaultRibbon}>
                                Default
                              </span>
                            )}
                          </div>
                        );
                      })}
                      <div
                        className={`${style.address}`}
                        onClick={() => setShowAddressForm(true)}
                      >
                        + Add a new address
                      </div>
                    </>
                  )}
                  {addresses && addresses.length === 0 && (
                    <>
                      <div className={style.address}>
                        <div className={style.addressName}>
                          No addresses found
                        </div>
                      </div>
                      <div
                        className={`${style.address}`}
                        onClick={() => setShowAddressForm(true)}
                      >
                        Add address
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <div className={style.summaryWrapper}>
            <div className={style.summary}>
              <div className={style.cartTotal}>
                <div style={{ padding: "20px" }}>
                  <h3>Cart Totals</h3>
                  <p className={style.totalRow}>
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </p>
                  <p className={style.totalRow}>
                    <span>Delivery</span>
                    <span>{formatPrice(0)}</span>
                  </p>
                  <p className={style.totalRow}>
                    <span>Discount</span>
                    <span>{formatPrice(0)}</span>
                  </p>
                  <hr />
                  <p className={style.totalRow}>
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  handlePlaceOrder();
                }}
                className={style.checkoutButton}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
        <Modal
          title="Add Address"
          onClose={() => setShowAddressForm(false)}
          show={showAddressForm}
          onSubmit={() => {
            return new Promise((resolve, reject) => {
              createNewAddress({ body: { address: newAddress } })
                .then((res) => {
                  setAddresses((prev) => [...prev, res.data]);
                  resolve();
                })
                .catch((err) => {
                  console.log("err in create address: ", err);
                  reject();
                });
            });
          }}
        >
          <AddressForm
            onFieldsChange={(formValues) => {
              setNewAddress(formValues);
            }}
          />
        </Modal>
      </WrapperContainer>
    </div>
  );
};

export default Checkout;
