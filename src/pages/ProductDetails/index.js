import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import style from "./style.module.css";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import Button from "../../Components/UI/Button";
import { getSingleProduct } from "../../services/ProductService";
import { addToCart } from "../../services/CartServices";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../services/WishlistServices";

// carousel settings
const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // autoplay: true,
  // autoplaySpeed: 4000
};

const ProductDetails = (props) => {
  const slickRef = useRef(null);
  const [product, setProduct] = useState({});
  // const [selectedVariant, setSelectedVariant] = useState({});
  // const [selectedAttributes, setSelectedAttributes] = useState([]);
  // const [attributeList, setAttributeList] = useState([]);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const { slug } = useParams();

  const mountedStyle = { animation: `${style.inAnimation} 500ms ease-in` };
  const unMountedStyle = { animation: `${style.outAnimation} 510ms ease-in` };

  useEffect(() => {
    // fetch product details from api
    getSingleProduct({ pathParams: { id: slug } }).then((res) => {
      setProduct(res.data);
      // setSelectedVariant(res.data.defaultVariant);
      // setSelectedAttributes(res.data.defaultVariant.attributes);
      // const attributeList = [];
      // for(let i=0;i<res.data.attributes.length;i++){
      //   attributeList.push(res.data.attributes[i].attribute.value[0])
      // }
      // res.data.attributes.map((item) => {
      //   return {
      //     attribute: item.attribute._id,
      //     attributeValue: item.attribute.value[0],
      //   };
      // });
    });
  }, [slug]);

  // const getAttributeValue = (attributeId) => {
  //   const attribute = selectedAttributes.find(
  //     (attr) => attr.attribute === attributeId
  //   );

  //   return attribute ? attribute.value : "";
  // };

  // useEffect(() => {
  //   if (
  //     product.variants &&
  //     product.variants.length &&
  //     selectedAttributes &&
  //     selectedAttributes.length
  //   ) {
  //     const variant = product?.variants?.find((variant) => {
  //       return variant?.attributes?.every((attr) => {
  //         return (
  //           selectedAttributes.find(
  //             (selectedAttr) =>
  //               selectedAttr.attribute === attr.attribute &&
  //               selectedAttr.attributeValue === attr.attributeValue
  //           ) !== undefined
  //         );
  //       });
  //     });

  //     if (variant) {
  //       setSelectedVariant(variant);
  //     } else {
  //       alert("No variant found");
  //     }
  //   }
  // }, [selectedAttributes, product.variants]);

  // const handleAttribute = (e, attribute) => {
  //   console.log("handleAttribute", e?.target?.value, attribute);
  //   setSelectedAttributes((prev) => {
  //     return prev.map((attr) => {
  //       if (attr.attribute === attribute._id) {
  //         return {
  //           ...attr,
  //           attributeValue: e?.target?.value,
  //         };
  //       }
  //       return attr;
  //     });
  //   });
  // };
  // console.log("selectedAttributes", selectedAttributes);
  return (
    <div>
      <WrapperContainer>
        <div className={style.productDetailsWrapper}>
          {/* product media section */}
          <div className={style.productMediaWrapper}>
            <div className={style.carouselWrapper}>
              <i
                className={`${style.carouselArrow} ${style.leftArrow}`}
                onClick={() => {
                  slickRef.current.slickPrev();
                }}
              >
                <BsArrowLeftCircle
                  style={{
                    fontSize: "1rem",
                  }}
                />
              </i>
              <i
                className={`${style.carouselArrow} ${style.rightArrow}`}
                onClick={() => {
                  slickRef.current.slickNext();
                }}
              >
                <BsArrowRightCircle
                  style={{
                    fontSize: "1rem",
                  }}
                />
              </i>
              <Slider ref={slickRef} {...settings}>
                {product.media &&
                  product.media.map((media) => (
                    <div key={media._id} className={style.imageWrapper}>
                      <img
                        className={style.sliderImg}
                        src={media.url}
                        alt={product.name}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          {/* product info section */}
          <div className={style.productInfoWrapper}>
            <h1 className={style.productName}>{product.name}</h1>
            <div>Shop / {product.category}</div>
            <div className={style.productPrice}>₹{product.price}</div>
            <div className="my-2">
              <h4>{product.variantAttributesLabel}</h4>
              <div className="my-2">
                {product.variants &&
                  product.variants.map((variant) => (
                    <div className="cursor-pointer my-1">
                      <input
                        className="cursor-pointer"
                        type="radio"
                        id={variant.id}
                        name="variant"
                        value={variant.value}
                      />
                      <label className="pl-2 cursor-pointer" for={variant.id}>
                        {variant.name}{" "}
                        {variant.price - product.price ? (
                          <>(+₹{variant.price - product.price})</>
                        ) : (
                          ""
                        )}
                      </label>
                      <br />
                    </div>
                  ))}
              </div>
            </div>
            <div className={style.productDescription}>
              In stock
              {/* {selectedVariant.inventory > 0 ? "In stock" : "Out of Stock!"} */}
            </div>
            <div className="hidden">
              {/* Attributes List */}
              {product.attributes &&
                product.attributes?.map((item, idx) => (
                  <div key={idx}>
                    {/* Field for color */}

                    <div className="my-6">
                      <div className=" items-center gap-4 text-xl">
                        <label htmlFor="color">
                          Select {item?.attribute?.label}:
                        </label>
                        {/* <Select
                          value={getAttributeValue(item?.attribute?._id)}
                          onChange={(e) => {
                            // e.preventDefault();
                            handleAttribute(e, item?.attribute);
                          }}
                          options={item?.attribute?.value?.map((items) => ({
                            value: items,
                            label: items,
                          }))}
                          //   <option
                          //     key={items}
                          //     value={items}
                          //     className="text-black"
                          //   >
                          //     <div className="p-2">{items} </div>
                          //   </option>
                          // ))}
                        /> */}
                        {/* <select
                          name={item?.attribute?.label}
                          id={item?.attribute?.label}
                          value={getAttributeValue(item?.attribute?._id)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          onChange={(e) => {
                            e.preventDefault();
                            handleAttribute(e, item?.attribute);
                          }}
                          placeholder="Choose color"
                        >
                          {item?.attribute?.value?.map((items) => (
                            <option
                              key={items}
                              value={items}
                              className="text-black"
                            >
                              <div className="p-2">{items} </div>
                            </option>
                          ))}
                        </select> */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className={style.productDescription}>
              Quantity:{" "}
              <input
                className="border border-gray-400 pl-2"
                type="number"
                min="1"
                max="10"
                value="1"
              />
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={() => {
                  setAddToCartLoading(true);
                  // addToCart({
                  //   body: { variantId: selectedVariant._id, quantity: 1 },
                  // })
                  //   .then((res) => {
                  //     setAddToCartLoading(false);

                  //     toast.success("Success Notification !", {
                  //       position: toast.POSITION.TOP_RIGHT,
                  //     });
                  //     // props.history.push("/cart");
                  //   })
                  //   .catch((err) => {
                  //     console.log("err while adding to cart: ", err);
                  //     toast.error(err?.response?.message, {
                  //       position: toast.POSITION.TOP_RIGHT,
                  //     });
                  //     setAddToCartLoading(false);
                  //   });
                }}
                className={style.addCartButton}
              >
                Add to Cart
              </button>
              <button
                disabled={wishlistLoading}
                onClick={() => {
                  setWishlistLoading(true);
                  if (product.isWishlisted) {
                    deleteFromWishlist({
                      pathParams: { productId: product._id },
                    })
                      .then(() => {
                        setProduct((prev) => ({
                          ...prev,
                          isWishlisted: false,
                        }));
                      })
                      .finally(() => {
                        setWishlistLoading(false);
                      });
                  } else {
                    addToWishlist({
                      pathParams: { productId: product._id },
                    })
                      .then(() => {
                        setProduct((prev) => ({
                          ...prev,
                          isWishlisted: true,
                        }));
                      })
                      .finally(() => {
                        setWishlistLoading(false);
                      });
                  }
                }}
                className={style.wishlistButton}
              >
                {product.isWishlisted ? (
                  <BsHeartFill
                    style={product.isWishlisted ? mountedStyle : unMountedStyle}
                    className={style.wishlistIconFilled}
                  />
                ) : (
                  <BsHeart className={style.wishlistIconFilled} />
                )}
              </button>
            </div>

            <div
              className={style.productDescription}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            {/* Product care instructions */}
            <div className={style.productCareWrapper}>
              Kindly select the sizes appropriately and follow the wash care
              instructions carefully on the packing for best performance.
            </div>
          </div>
        </div>
      </WrapperContainer>
      {/* Contact Us Section */}
      <div className={style.contactUsWrapper}>
        <div className={style.innerContainer}>
          <p>
            Product cost(s) found on our online store reflects retail sale only.
          </p>
          <p>
            We request all institutions to contact our office for any sales
            related enquiries.
          </p>
          <Button>Contact Us</Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
