import React from 'react'
import styles from './CardPlant.module.css'
import { Link } from 'react-router-dom'
// components
import { ActionButton } from '@components/ActionButton'
// models
import ICatalogPlant from '@models/ICatalogPlant'

const CardPlant = ({ id, name, price, discount, imagePubPath, categories }: ICatalogPlant) => {
  return (
    <>
      <div className={styles.frame}>
        <Link to={`/flower/${id}`}>
          <div className={styles.image_container} style={{ backgroundImage: `url(${imagePubPath})` }}>
            <p className={styles.discount_label}>-{discount}%</p>
          </div>
        </Link>
        <div className={styles.price_container}>
          <div className={styles.price_numbers_container}>
            <p className={styles.price_number}>{Math.round(price - price / discount)} ₽</p>
            <p className={styles.price_number} style={{ opacity: 0.6 }}>
              {price} ₽
            </p>
          </div>
          <div className={styles.price_infotext_container}>
            <p className={styles.price_infotext}>Со скидкой</p>
            <p className={styles.price_infotext}>Обычная</p>
          </div>
        </div>
        <div className={styles.name_container}>
          <h3 className={styles.name_text}>{name}</h3>
        </div>
        <div className={styles.btn_to_cart_container}>
          <ActionButton text='В корзину' action={() => {}} bcolor='#f4f4f4' tcolor='#426545' border='1px solid #426545' />
        </div>
      </div>
    </>
  )
}

export default CardPlant
