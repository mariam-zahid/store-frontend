import React from "react";
import ProductCard from "./Components/ProductCard";
import styles from "./style.module.css";

// import images
import image1 from "../../../../assets/images/homepage-product-section/A_Colour_Stripe.jpeg";
import image2 from "../../../../assets/images/homepage-product-section/A_Colour_Stripe.jpeg";
import image3 from "../../../../assets/images/homepage-product-section/A_Colour_Stripe.jpeg";

const dummyData = [
  {
    imageSrc: image1,
    title: "Bed & Bath Linen",
    description: "View our wide range of bed and bath linen that best fits your requirement.",
    link: "#"
  },
  {
    imageSrc: image2,
    title: "Home Textiles",
    description: "We have expanded to serve you the finest home textile made ups.",
    link: "#"
  },
  {
    imageSrc: image3,
    title: "Mattresses",
    description: "Give relaxed experience to your guest with our cozy Repose ® mattress.",
    link: "#"
  },
  {
    imageSrc: image3,
    title: "Pillows & Duvets",
    description: "We make the most fluffiest comforters that are available in the market.",
    link: "#"
  },
];

const ProductCardSection = () => {
  return (
    <div className={styles['card-section-wrapper']}>
        {dummyData.map((data, index) => {
            return (
              <ProductCard key={index} data={data} />
            )
        })}
    </div>
  );
};

export default ProductCardSection;
