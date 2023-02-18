import React from "react";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import catalogue_hero from "../../assets/images/catalogue_hero.png";

const Catalogue = () => {
  return (
    <div>
      <WrapperContainer>
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <img
            style={
              {
                // width: "100%",
                // maxHeight: "500px",
                // objectFit: "contain",
              }
            }
            src={catalogue_hero}
            alt="Primary Logo"
          />

          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 lg:ml-4">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl text-center sm:mt-0 mt-6 font-bold tracking-tight sm:text-4xl sm:leading-none max-w-lg mb-6">
                Catalogue
              </h2>
              <p className="text-base md:text-lg">
                Welcome to our latest catalogue, where you'll find an array of
                high-quality linens and textiles designed to elevate the guest
                experience in your hotel, resort, spa, or restaurant. Our
                collection features an extensive range of premium products that
                are built to withstand the demands of the hospitality industry,
                while offering unparalleled comfort, style, and durability.
                <br />
                <br />
                Whether you're looking for luxurious bed linens, fluffy towels,
                stylish tablecloths, or anything in between, our catalogue has
                something to suit every need and taste. We offer a wide range of
                products in various sizes, styles, and colors, so you can create
                a personalized look that's sure to impress your guests.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          {/* <img
            style={
              {
                // width: "100%",
                // maxHeight: "500px",
                // objectFit: "contain",
              }
            }
            src={catalogue_hero}
            alt="Primary Logo"
          /> */}

          {/* Bed sheet section */}
          <div>
            <h2>New heading</h2>
          </div>

          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 lg:ml-4">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl text-center sm:mt-0 mt-6 font-bold tracking-tight sm:text-4xl sm:leading-none max-w-lg mb-6">
                Catalogue
              </h2>
              <p className="text-base md:text-lg">
                Welcome to our latest catalogue, where you'll find an array of
                high-quality linens and textiles designed to elevate the guest
                experience in your hotel, resort, spa, or restaurant. Our
                collection features an extensive range of premium products that
                are built to withstand the demands of the hospitality industry,
                while offering unparalleled comfort, style, and durability.
                <br />
                <br />
                Whether you're looking for luxurious bed linens, fluffy towels,
                stylish tablecloths, or anything in between, our catalogue has
                something to suit every need and taste. We offer a wide range of
                products in various sizes, styles, and colors, so you can create
                a personalized look that's sure to impress your guests.
              </p>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default Catalogue;
