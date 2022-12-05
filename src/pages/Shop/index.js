import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/UI/Button";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import { getProducts } from "../../services/products/productService";
import style from "./styles.module.css";

const shopProducts = [
  {
    id: 1,
    title: "Bed Sheets - satin stripes / plain",
    price: 109.95,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    // category
  },
  {
    id: 2,
    title: "Bed Sheets - Colored",
    price: 22.3,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, solid color t-shirt, soft and stretchy, lightweight, breathable and comfortable to wear",
    // category
  },
  {
    id: 3,
    title: "Pillow Covers",
    price: 55.99,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "Great for fall and winter, good quality Fabric, and making style make you feel good and comfortable when wearing",
    // category
  },
  {
    id: 4,
    title: "Duvet",
    price: 15.99,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "The color could be slightly different between on the screen and in practice. Item model number: variant3735AMZ",
    // category
  },
  {
    id: 5,
    title: "Duvet Cover",
    price: 695,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "Classic refinement is the key ingredient to the iconic style of John Hardy and is evident in each of their pieces. This classic bracelet from the Legends Collection features sterling silver beads and Indonesian woven leather.",
    // category
  },
  {
    id: 6,
    title: "Comforter",
    price: 168,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "From our Legends Collection, the Solid Gold Petite Micropave ",
    // category
  },
  {
    id: 7,
    title: "Mattress protector",
    price: 9.99,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    // category
  },
  {
    id: 8,
    title: "Bed Runner",
    price: 10.99,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/462926581.jpg",
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    // category
  },
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts({}).then((res) => {
      setProducts(res.data);
    });
    // setProducts(shopProducts)
  }, []);
  return (
    <div>
      <WrapperContainer>
        <div>Shop</div>
        <div className={style.listWrapper}>
          {products.map((product) => (
            <div key={product._id} className={style.productCard}>
              <img
                className={style.productImage}
                src={
                  product?.media &&
                  product?.media.length &&
                  product?.media[0]?.url
                }
                alt={product.name}
              />
              <div className={style.productInfo}>
                <div className={style.productTitle}>{product.name}</div>
                <div className={style.productPrice}>
                  ₹{product?.defaultVariant?.price}
                </div>
              </div>
              <Link to={product.slug}>
                <Button>Buy now</Button>
              </Link>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
};

export default Shop;
