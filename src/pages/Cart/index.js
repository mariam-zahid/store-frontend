import React, { useCallback, useEffect, useState } from "react";
import style from "./style.module.css";
import WrapperContainer from "../../Components/UI/WrapperContainer";

import { getCart, updateCartItem } from "../../services/CartServices";
import { useAtom } from "jotai";
import { currentUser as userDetails } from "../../atoms/UserAtoms";
import { debounce } from "lodash";
import Button from "../../Components/UI/Button";

const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });
};

const UserCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser] = useAtom(userDetails);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (!!currentUser._id) {
      getCart().then((res) => {
        setCartItems(res?.data);
      });
    }
  }, [currentUser._id]);
  useEffect(() => {
    if (cartItems.length) {
      let total = 0;
      cartItems.forEach((item) => {
        total += item?.variant?.price * item?.quantity;
      });
      setTotal(total);
    }
  }, [cartItems]);
  const action = (item) => {
    updateCartItem({
      body: { quantity: item.quantity },
      pathParams: { cartItemId: item._id },
    });
  };
  const debounceFn = useCallback(debounce(action, 1000), []);
  return (
    <div>
      <WrapperContainer>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead className={style.theadPrimary}>
              <tr className="text-center">
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className={style.tBody}>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td className={style.cartItemImageWrapper}>
                    <img
                      className={style.cartItemImage}
                      src={
                        (item?.variant?.media && item?.variant?.media[0].url) ||
                        (item?.product?.media && item?.product?.media[0].url)
                      }
                      alt={item?.product?.name}
                    />
                  </td>

                  <td>
                    <h3>{item?.product?.name}</h3>
                    <div>
                      {item?.variant?.attributes?.map((attr) => (
                        <p key={attr._id}>
                          {attr?.label}: {attr?.attributeValue}
                        </p>
                      ))}
                    </div>
                  </td>

                  <td>₹{item?.variant?.price}</td>

                  <td>
                    <div>
                      <input
                        type="text"
                        name="quantity"
                        value={item?.quantity}
                        className={style.quantityInput}
                        onChange={(e) => {
                          e.preventDefault();
                          // set only if value is a number
                          let filteredValue = e.target.value.replace(/\D/g, "");
                          if (!+filteredValue) {
                            filteredValue = 1;
                          }
                          setCartItems((prev) => {
                            const updatedCart = prev.map((cartItem) => {
                              if (cartItem._id === item._id) {
                                return {
                                  ...cartItem,
                                  quantity: filteredValue,
                                };
                              }
                              return cartItem;
                            });
                            return updatedCart;
                          });
                          debounceFn({
                            ...item,
                            quantity: filteredValue,
                          });
                        }}
                        min="1"
                        max="100"
                      />
                    </div>
                  </td>

                  <td className={style.minWidth}>
                    {formatPrice(item?.variant?.price * item?.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <button className={style.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default UserCart;
