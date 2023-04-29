import React from "react";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import catalogue_hero from "../../assets/images/catalogue_hero.png";
import section1 from "../../assets/images/section1.png";
import section2 from "../../assets/images/section2.png";
import bedsheet1 from "../../assets/images/bedsheet1.jpeg";
import bedsheet2 from "../../assets/images/bedsheet2.jpeg";
import Button from "../../Components/UI/Button";

const WrapperCatalogue = ({ children }) => (
  <div className="container mx-auto flex flex-col items-center justify-between w-full my-10 lg:flex-row">
    {children}
  </div>
);

const Catalogue = () => {
  return (
    <div>
      {/* intro section */}
      <WrapperContainer>
        <div className="flex flex-col items-center justify-between w-full my-10 lg:flex-row">
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
                Product Catalogue
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

      {/* section 1 - Bedsheets */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section1}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Premium Bedsheets
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Premium Bed Sheets</h3>
            <p className="my-4">
              With single ply satin construction, the bed sheets adds a soft
              touch of comfort to any bedroom. Permanent press and machine
              washable, these durable and resilient sheets are the ideal choice
              for any hotel.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>
      {/* Section 1 ends */}

      {/* section 2 - Duvets/Comforters */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section2}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Duvets/Comforters
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-1 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Duvets/Comforters</h3>
            <p className="my-4">
              We offer a stylish range of Duvets that are designed specially to
              suit different interiors of hotels and home decors. The strong and
              vibrant use of colors, designs and patterns make the collection a
              unique and trendy one.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>

      {/* section 3 - Pillows/Cushions */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section1}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Pillows/Cushions
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Premium Bed Sheets</h3>
            <p className="my-4">
              The ideal economic sleeping pillow and cushions. A durable
              poly-cotton shell, lightly filled with fibre, designed to be
              machine washable and to last long.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>

      {/* section 4 - Pillow, Duvets Covers */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section2}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Pillow, Duvets Covers
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-1 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Pillow, Duvets Covers</h3>
            <p className="my-4">
              The offered Pillow, Cushion and Duvet Covers are designed from the
              optimum quality. These are available in a range of color, size and
              design according to your demand.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>

      {/* section 5 - Bed Runner */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section1}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Bed Runner
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Premium Bed Sheets</h3>
            <p className="my-4">
              This Bed Runner with cushion covers will surely fetch attention as
              well as compliments from your guests. In addition, it is easy to
              maintain and soft to step in.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>

      {/* section 6 - Towels */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section2}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Bath, Hand, Face Towels
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-1 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Bath, Hand, Face Towels</h3>
            <p className="my-4">
              Available in several sizes and qualities in different GSM and
              colors, our towels are sure to delight. These soft and luxurious
              towels are made with cotton and designed with care, so they are
              almost guaranteed to become a favorite. Their plush feel,
              beautiful look and impressive absorbency all come together to make
              sure guests feel pampered by each aspect of the bathroom
              experience.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>

      {/* section 7 - Mattress Protector */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section1}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Mattress Protector
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Mattress Protector</h3>
            <p className="my-4">
              Maximizing hygiene and comfort is easy with our Quilted Mattress
              Protector. Our low-profile mattress protector goes barely noticed
              and adds comfort for guests, all while increasing the longevity of
              the mattress itself by creating a barrier that helps stop spills,
              dirt, water and anything else that might compromise its
              cleanliness or comfort.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>

      {/* section 8 - Printed Bed Sheets */}
      <div className="w-full my-10 relative">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={section2}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          Printed Bed Sheets
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue>
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet1}
              alt="Primary Logo"
            />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
              src={bedsheet2}
              alt="Primary Logo"
            />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-1 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Printed Bed Sheets</h3>
            <p className="my-4">
              Available in several sizes and qualities in different GSM and
              colors, our towels are sure to delight. These soft and luxurious
              towels are made with cotton and designed with care, so they are
              almost guaranteed to become a favorite. Their plush feel,
              beautiful look and impressive absorbency all come together to make
              sure guests feel pampered by each aspect of the bathroom
              experience.
            </p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </WrapperCatalogue>
    </div>
  );
};

export default Catalogue;
