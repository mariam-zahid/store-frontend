import React from "react";
import styles from "./style.module.css";

const ProductCard = ({data}) => {
    const {imageSrc, title, description, link} = data;
  return (
    <div className={styles['card-wrapper']}>
        <div className={styles['card-image']}>
            <img src={imageSrc} alt="product" />
        </div>
        <div className={styles['card-content']}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className={styles['card-content-action']}>View Product</button>
        </div>
    </div>
  );
};

export default ProductCard;
