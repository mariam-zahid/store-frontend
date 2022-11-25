import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import WrapperContainer from '../../Components/UI/WrapperContainer'
import Slider from 'react-slick'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Button from '../../Components/UI/Button'

const productDetails = {
  isActive: true,
  currency: 'USD',
  buyCount: 0,
  attributes: [
    {
      $oid: '632293ef4e6904a360508743',
    },
    {
      $oid: '632294a14e6904a360508745',
    },
  ],
  available: true,
  name: 'Bed sheet',
  description: 'This is a bed sheet, made from the finest of the fabrics',
  category: {
    $oid: '63226c500e6cdb29802c1c50',
  },
  addedBy: {
    $oid: '63174fc1ac41b717aca698b6',
  },
  media: [
    {
      _id: '632340cda78afd3b90bfd331',
      url:
        'https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/983782642.jpg',
      type: 'image/jpeg',
    },
    {
      _id: '632340cda78afd3b90bfd332',
      url:
        'https://d2j6dbq0eux0bg.cloudfront.net/images/10364361/983782642.jpg',
      type: 'image/jpeg',
    },
  ],
}

// carousel settings
const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // autoplay: true,
  // autoplaySpeed: 4000
}

const ProductDetails = (props) => {
  const slickRef = useRef(null)
  const [product, setProduct] = useState({})
  const { slug } = useParams()
  useEffect(() => {
    // fetch product details from api
    setProduct(productDetails)
  }, [slug])
  return (
    <div>
      <WrapperContainer>
        <div className={style.productDetailsWrapper}>
          {/* product media section */}
          <div className={style.productMediaWrapper}>
            <div className={style.carouselWrapper}>
              <i
                className={`${style.carouselArrow} ${style.leftArrow}`}
                onClick={() => {
                  slickRef.current.slickPrev()
                }}
              >
                <BsArrowLeftCircle
                  style={{
                    fontSize: '1rem',
                  }}
                />
              </i>
              <i
                className={`${style.carouselArrow} ${style.rightArrow}`}
                onClick={() => {
                  slickRef.current.slickNext()
                }}
              >
                <BsArrowRightCircle
                  style={{
                    fontSize: '1rem',
                  }}
                />
              </i>
              <Slider ref={slickRef} {...settings}>
                {product.media &&
                  product.media.map((media) => (
                    <div key={media._id} className={style.imageWrapper}>
                      <img className={style.sliderImg} src={media.url} alt={product.name} />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          {/* product info section */}
          <div className={style.productInfoWrapper}>
            <h1 className={style.productName}>{product.name}</h1>
            <div className={style.productDescription}>
              {product.description}
            </div>
            <div className={style.productPrice}>₹699</div>
            <div className={style.productDescription}>In stock</div>
            <div className={style.productDescription}>
              Quantity: <input type="number" min="1" max="10" value="1" />
            </div>
            <button className={style.addCartButton}>Add to Bag</button>

            {/* Product care instructions */}
            <div className={style.productCareWrapper}>
              Kindly select the sizes appropriately and follow the wash care
              instructions carefully on the packing for best performance.
            </div>
          </div>
        </div>
      </WrapperContainer>
      {/* Contact Us Section */}
      <div className={style.contactUsWrapper}>
        <div className={style.innerContainer}>
          <p>
            Product cost(s) found on our online store reflects retail sale only.
          </p>
          <p>
            We request all institutions to contact our office for any sales
            related enquiries.
          </p>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
