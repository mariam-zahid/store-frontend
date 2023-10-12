import React from "react";
import WrapperContainer from "../../Components/UI/WrapperContainer";
import s from "./Catalogue.module.css";
import catalogue_hero from "../../assets/images/catalogue_hero.png";
import section1 from "../../assets/images/section1.jpg";
import section2 from "../../assets/images/section2.jpg";
import section3 from "../../assets/images/section3.png";
import section4 from "../../assets/images/section4.jpg";
import section5 from "../../assets/images/section5.jpg";
import section6 from "../../assets/images/section6.jpg";
import section7 from "../../assets/images/section7.jpg";
import section8 from "../../assets/images/section8.jpg";
import duvet1 from "../../assets/images/duvet1.jpg";
import duvet2 from "../../assets/images/duvet2.jpeg";
import pillow1 from "../../assets/images/pillow1.jpg";
import pillow2 from "../../assets/images/pillow2.jpg";
import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import runner1 from "../../assets/images/runner1.jpg";
import runner2 from "../../assets/images/runner2.jpg";
import towel1 from "../../assets/images/towel1.jpg";
import towel2 from "../../assets/images/towel2.jpg";
import mattress1 from "../../assets/images/mattress1.jpg";
import mattress2 from "../../assets/images/mattress2.jpg";
import print1 from "../../assets/images/print1.jpg";
import print2 from "../../assets/images/print2.jpg";
import bedsheet1 from "../../assets/images/bedsheet_v111.jpg";
import bedsheet2 from "../../assets/images/bedsheet2.jpg";
import Button from "../../Components/UI/Button";

const WrapperCatalogue = ({ children, className }) => (
  <div
    className={`container mx-auto flex flex-col items-center justify-between w-full my-10 lg:flex-row ${className}`}
  >
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
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Premium Bedsheets
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={bedsheet1} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={bedsheet2} alt="Primary Logo" />
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
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Duvets/Comforters
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={duvet1} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={duvet2} alt="Primary Logo" />
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
          src={section3}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Pillows/Cushions
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={pillow1} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={pillow2} alt="Primary Logo" />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Pillows/Cushions</h3>
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
          src={section4}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Pillow, Duvets Covers
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={cover1} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={cover2} alt="Primary Logo" />
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
          src={section5}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Bed Runner
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={runner2} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={runner1} alt="Primary Logo" />
          </div>
          <div className="row-start-3 md:row-start-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 md:p-16 md:pt-12">
            <h3 className="my-4 text-2xl">Bed Runner</h3>
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
          src={section6}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Bath, Hand, Face Towels
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={towel1} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={towel2} alt="Primary Logo" />
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
          src={section7}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Mattress Protector
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-end-auto col-start-3 md:col-start-6 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={mattress1} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-1 md:col-start-1 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={mattress2} alt="Primary Logo" />
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
          src={section8}
          alt="Primary Logo"
        />
        {/* <div className="w-full text-xl absolute inset-y-1/2 flex justify-content-center"> */}
        <h3 className="w-full text-2xl absolute inset-y-1/2 text-center">
          <span className="px-12 py-2 bg-zinc-300/50 rounded shadow-xl">
            Printed Bed Sheets
          </span>
        </h3>
        {/* </div> */}
      </div>
      <WrapperCatalogue className="max-w-7xl">
        <div className="p-4 md:p-0 grid grid-cols-12">
          <div
            style={{ zIndex: 2 }}
            className="relative row-start-1 row-span-1 col-start-1 md:col-start-1 col-span-10 md:col-span-7"
          >
            <img className={s.image} src={print2} alt="Primary Logo" />
          </div>
          <div
            style={{ zIndex: 1 }}
            className="relative row-start-1 row-span-2 col-start-3 md:col-start-7 col-span-10 md:col-span-6 grid-secondary"
          >
            <img className={s.image} src={print1} alt="Primary Logo" />
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
