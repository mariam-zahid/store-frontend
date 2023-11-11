import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/UI/Button";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import { getProducts } from "../../services/ProductService";
import style from "./styles.module.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts({}).then((res) => {
      setProducts(res.data);
    });
    // setProducts(shopProducts)
  }, []);
  return (
    <div style={{ marginTop: "4rem" }}>
      <WrapperContainer>
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
                <div className={style.productPrice}>₹{product?.price}</div>
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
