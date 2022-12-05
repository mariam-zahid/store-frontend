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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem natus quos. Quisquam, quae. Quisquam
              voluptatum quae quidem natus quos. Quisquam, quae.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_1} />
        </div>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>WELCOME TO SHIVAZ HANDLOOM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem natus quos. Quisquam, quae. Quisquam
              voluptatum quae quidem natus quos. Quisquam, quae.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_2} />
        </div>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>WELCOME TO SHIVAZ HANDLOOM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem natus quos. Quisquam, quae. Quisquam
              voluptatum quae quidem natus quos. Quisquam, quae.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_3} />
        </div>
        <div className={style.imageWrapper}>
          <div className={style.overlay}></div>
          <div className={style.carouselContent}>
            <h1>WELCOME TO SHIVAZ HANDLOOM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem natus quos. Quisquam, quae. Quisquam
              voluptatum quae quidem natus quos. Quisquam, quae.
            </p>
          </div>
          <img className={style.sliderImg} src={heroImg_4} />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
