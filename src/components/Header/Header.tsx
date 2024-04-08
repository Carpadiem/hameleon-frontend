// react, styles, router
import React from 'react'
import styles from './Header.module.css'
import logo from '/logo.png'
// components
import { Point } from './components/Point'
import { LinkButton } from '@components/LinkButton'
import { PopupCart } from '@components/PopupCart'
// svg
import SVGCart from '@svg/cart.svg?react'
// stores, mobx
import { observer } from 'mobx-react-lite'
import storeCart from '@stores/storeCart'

const Header = () => {
  const cartIconClick = () => {
    storeCart.setIsCartOpened(!storeCart.isCartOpened)
  }

  return (
    <>
      <div className={styles.block_fixed}>
        <div className={styles.container1200}>
          <div className={styles.logo_container}>
            <img className={styles.logo_image} src={logo} alt='' />
            <p className={styles.logo_text}>Хамелеон</p>
          </div>
          <div className={styles.points_container}>
            <Point text='Главная' to='/' />
            <Point text='Каталог' to='/catalog' />
            <Point text='Контакты' to='/contacts' />
          </div>
          <div className={styles.buttons_container}>
            <div className={styles.btn_cart} onClick={cartIconClick}>
              <SVGCart />
            </div>
            <LinkButton text='Войти' to='/signin' bcolor='white' tcolor='black' border='1px solid #dfdfdf' radius={3} />
          </div>
        </div>
      </div>
      {storeCart.isCartOpened && <PopupCart />}
    </>
  )
}

export default observer(Header)
