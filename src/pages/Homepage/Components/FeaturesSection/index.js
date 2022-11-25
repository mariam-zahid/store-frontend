import React from 'react'
import styles from './style.module.css'
import {
  BsBookmark,
  BsFillTagsFill,
  BsChatSquareTextFill,
} from 'react-icons/bs'

const FeaturesSection = () => {
  return (
    <div className={styles['section-wrapper']}>
      <div className={styles['section-content']}>
        <BsBookmark style={{
            fontSize: '2rem',
        }} />
        <h3>Online Store</h3>
        Visit our online store to experience wide range of bed linen, bath
        linen, comforters and toiletries travel kits.
      </div>
      <div className={styles['section-content']}>
        <BsFillTagsFill style={{
            fontSize: '2rem',
        }} />
        <h3>Linen Size Calculator</h3>
        To assist our clients in all possible means, we have designed a size
        calculator to provide perfect fit for your mattress.
      </div>
      <div className={styles['section-content']}>
        <BsChatSquareTextFill style={{
            fontSize: '2rem',
        }} />
        <h3>Chat With Us</h3>
        Support is a click away. Chat with us during business hours and we will
        assist you in minutes.
      </div>
    </div>
  )
}

export default FeaturesSection
