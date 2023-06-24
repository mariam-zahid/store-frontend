import React from "react";
import Button from "../../Components/UI/Button";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import FeaturesSection from "./Components/FeaturesSection";
import HeroCarousel from "./Components/HeroCarousel";
import ProductCardSection from "./Components/ProductCardSection";
import ExclusiveLinenCollection from "./Components/ExclusiveLinenCollection";

const Homepage = () => {
  return (
    <div>
      <HeroCarousel />
      {/* Hero carousel section goes here */}
      <WrapperContainer>
        <ProductCardSection />
      </WrapperContainer>
      {/* Exclusive linen collection section */}
      <ExclusiveLinenCollection />
      {/* Features section */}
      <WrapperContainer>
        <FeaturesSection />
      </WrapperContainer>
      {/* Knowledge section */}
      <WrapperContainer>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Mastering Fabrics, Technology & Customer Service
        </h2>
        <p>
          Our fabrics are carefully selected from the finest materials, and
          undergo rigorous testing to ensure they meet the high standards of the
          hospitality industry. Our linens are lab-tested and certified,
          ensuring they are free from harmful substances and safe for your
          guests. We understand the importance of choosing the right fabric for
          each product, and we take great care to ensure our linens are both
          comfortable and durable
        </p>
        <p>
          Our state-of-the-art production facility uses the latest technology to
          create the highest quality linens. We use computer-controlled sewing
          machines to ensure consistent stitch quality, and we use advanced
          washing processes to ensure our linens are always soft and fluffy.
        </p>
        <p>
          We are committed to continuous improvement, and we regularly review
          and update our processes to ensure we are meeting the evolving needs
          of the hospitality industry. We are ISO 9001 certified, demonstrating
          our commitment to quality and customer satisfaction.
        </p>
        <Button>Read More</Button>
      </WrapperContainer>
    </div>
  );
};

export default Homepage;
