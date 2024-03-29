import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import heroImg_1 from "../../../../assets/images/heroImg_1.jpg";
import heroImg_2 from "../../../../assets/images/heroImg_2.jpg";
import heroImg_3 from "../../../../assets/images/heroImg_3.jpg";
import heroImg_4 from "../../../../assets/images/heroImg_4.jpg";

// slider settings
const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const HeroCarousel = () => {
  const slickRef = useRef(null);
  return (
    <div className={style.master}>
      {/* left carousel arrow */}
      <i
        className={`${style.carouselArrow} ${style.leftArrow}`}
        onClick={() => {
          slickRef.current.slickPrev();
        }}
      >
        <BsArrowLeftCircle
          style={{
            fontSize: "2rem",
          }}
        />
      </i>
      {/* right carousel arrow */}
      <i
        className={`${style.carouselArrow} ${style.rightArrow}`}
        onClick={() => {
          slickRef.current.slickNext();
        }}
      >
        <BsArrowRightCircle
          style={{
            fontSize: "2rem",
          }}
        />
      </i>
      <Slider ref={slickRef} {...settings}>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>WELCOME TO SHIVAZ HANDLOOM</h1>
            <p>
              Built with the highest quality materials, our linens are sure to
              impress your guests. With state-of-the-art technology, we are able
              to produce the highest quality linens in the industry. With our
              dedicated customer service team, you can rest assured that you are
              in good hands.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_1} />
        </div>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>Elevate Your Guest Experience with Our Luxury Linens</h1>
            <p>
              Transform your hotel rooms into a haven of comfort and style with
              our premium linens. Convert your guests' stay into a memorable one
              with our elegant and sophisticated linens. Indulge your guests in
              the epitome of comfort and luxury with our top-of-the-line linens.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_2} />
        </div>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>Eco-Friendly Linens for a Sustainable Future</h1>
            <p>
              We are committed to providing eco-friendly solutions that protect
              our planet and preserve its natural resources. Our linens are made
              from sustainable materials, helping to reduce waste and conserve
              resources. Take a step towards a greener future with our
              environmentally friendly linens.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_3} />
        </div>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>Unmatched Comfort and Softness</h1>
            <p>
              Our linens are crafted to provide the ultimate in comfort and
              softness, night after night. Experience the comfort and softness
              of our linens for yourself and discover why they are so sought
              after. Say goodbye to scratchy, uncomfortable linens and hello to
              a good night's sleep with our premium linens.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_4} />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
