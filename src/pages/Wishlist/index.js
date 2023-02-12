import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { currentUser as userDetails } from "../../atoms/UserAtoms";

import style from "./style.module.css";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import {
  deleteFromWishlist,
  getWishlist,
} from "../../services/WishlistServices";

const Wishlist = () => {
  const [currentUser] = useAtom(userDetails);
  const [wishlistItems, setWishlistItems] = useState([]);
  useEffect(() => {
    if (!!currentUser._id) {
      getWishlist().then((res) => {
        setWishlistItems(res?.data);
      });
    }
  }, [currentUser._id]);
  return (
    <div style={{ maxWidth: "768px", margin: "auto" }}>
      <WrapperContainer>
        <h1>Wishlist</h1>
        {wishlistItems.length ? (
          wishlistItems.map((item) => {
            return (
              <div className={style.itemCard} key={item._id}>
                <div className={style.imageWrapper}>
                  <img
                    className={style.itemImage}
                    src={
                      (item?.variant?.media && item?.variant?.media[0].url) ||
                      (item?.product?.media && item?.product?.media[0].url)
                    }
                    alt={item?.product?.name}
                  />
                </div>
                <div className={style.itemDetails}>
                  <h3>{item?.product?.name}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item?.product?.description,
                    }}
                  />
                </div>
                <div className={style.itemActions}>
                  <button>Move to cart</button>
                  <button
                    onClick={() => {
                      deleteFromWishlist({
                        pathParams: { productId: item.product._id },
                      }).then(() => {
                        setWishlistItems((prev) =>
                          prev.filter(
                            (wishlistItem) => wishlistItem._id !== item._id
                          )
                        );
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No items in wishlist</h3>
        )}
      </WrapperContainer>
    </div>
  );
};

export default Wishlist;
