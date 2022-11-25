import React from 'react'
import Button from '../../Components/UI/Button'
import WrapperContainer from '../../Components/UI/WrapperContainer'
import FeaturesSection from './Components/FeaturesSection'
import HeroCarousel from './Components/HeroCarousel'
import ProductCardSection from './Components/ProductCardSection'

const Homepage = () => {
  return (
    <div>
      <HeroCarousel />
      {/* Hero carousel section goes here */}
      <WrapperContainer>
        <ProductCardSection />
        {/* Features section */}
        <FeaturesSection />
        {/* Knowledge section */}
        <h2 style={{
          textAlign: 'center',
        }}>Mastering Fabrics, Technology & Customer Service</h2>
        <p>
          Manufacturers and suppliers of high quality hotel bed sheets, pillow
          covers, towels, comforters with registered facilities located in
          Erode, Tamilnadu (IN). Speak to our sales consultants or contact us
          using our online support portal for a wide range of products and their
          specifications.
        </p>
        <p>
          We branded our hard work 'ALBEDO' that transcribe energy reflected
          back into space.With masters weaving the thread and our expert team
          learning the ropes, we are proud to embody the most efficient term in
          textile industry AAF (anti-aging fabrication) technology.
        </p>
        <p>
          Our mission will speak for itself and yes that's scripted in our
          quality. As a manufacturer and trader of genuine bed sheets and towels
          since 1968, we inherited fabric techniques and improvised our own
          innovations using the modern technology available to us.
        </p>
        <p>
          Our team has been sweating on the art of AAF (anti-aging fabrication)
          technology that helps fabrics to last longer when used with
          non-commercial agents.
        </p>
        <Button>Read More</Button>
      </WrapperContainer>
    </div>
  )
}

export default Homepage
