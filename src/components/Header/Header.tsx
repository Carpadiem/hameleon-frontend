// react, styles, router
import React from 'react'
import styles from './Header.module.css'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// components
import { Point } from './components/Point'
import { LinkButton } from '@components/LinkButton'
import { PopupCart } from '@components/PopupCart'
// svg
import SVGCart from '@svg/cart.svg?react'
import SVGAccount from '@svg/account.svg?react'
import SVGCall from '@svg/call.svg?react'
// stores, mobx
import { observer } from 'mobx-react-lite'
import storeCart from '@stores/storeCart'

const Header = () => {
  const navigate = useNavigate()

  const cartIconClick = () => {
    storeCart.setIsCartOpened(!storeCart.isCartOpened)
  }

  const accountIconClick = () => {
    navigate('/account')
  }

  const [cartItemsCount, setCartItemsCount] = React.useState(0)
  React.useEffect(() => {
    const cartItemsLen = storeCart.cart.items.length
    setCartItemsCount(storeCart.cart.items.length)
  }, [storeCart.cart.items.length])

  const [isLogin, setIsLogin] = React.useState(false)
  React.useEffect(() => {
    try {
      const userdata = JSON.parse(window.localStorage.getItem('userdata'))
      if (userdata) setIsLogin(true)
    } catch {}
  })

  const [isMobile, setIsMobile] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // first render
  React.useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile(true)
    }
  }, [])

  const burger_click = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const mobileMenuContainersStyle = {
    bottom: isMobileMenuOpen ? '0' : '100px',
    opacity: isMobileMenuOpen ? '1' : '0',
    pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
  } as React.CSSProperties

  return (
    <>
      {isMobile ? (
        <div
          className={styles.block_fixed}
          style={{
            height: isMobileMenuOpen ? '65%' : '80px',
          }}
        >
          <div className={styles.container1200}>
            <div className={styles.top_line}>
              <Link className={styles.logo_container} to='/'>
                <img className={styles.logo_image} src={logo} alt='' />
                <p className={styles.logo_text}>Хамелеон</p>
              </Link>
              <div className={styles.burger_container} onClick={burger_click}>
                <div className={styles.burger_line} />
                <div className={styles.burger_line} />
                <div className={styles.burger_line} />
              </div>
            </div>
            <div className={styles.points_container} style={mobileMenuContainersStyle}>
              <Point text='Главная' to='/' />
              <Point text='Каталог' to='/catalog' />
              <Point text='Контакты' to='/contacts' />
            </div>
            <div className={styles.phone_container} style={mobileMenuContainersStyle}>
              <div className={styles.phone_icon}>
                <SVGCall />
              </div>
              <div className={styles.phone_text_head}>
                <p className={styles.phone_numbers}>8-880-546-52-98</p>
                <p className={styles.phone_clock}>Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
            <div className={styles.buttons_container} style={mobileMenuContainersStyle}>
              {isLogin && (
                <div className={styles.btn_cart} onClick={cartIconClick}>
                  <SVGCart />
                  {cartItemsCount > 0 ? (
                    <div className={styles.cart_items_count}>
                      <p>{cartItemsCount}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )}
              {isLogin ? (
                <div className={styles.btn_account} onClick={accountIconClick}>
                  <SVGAccount />
                </div>
              ) : (
                <LinkButton text='Войти' to='/login' bcolor='white' tcolor='black' border='1px solid #dfdfdf' radius={3} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.block_fixed}>
          <div className={styles.container1200}>
            <Link className={styles.logo_container} to='/'>
              <img className={styles.logo_image} src={logo} alt='' />
              <p className={styles.logo_text}>Хамелеон</p>
            </Link>
            <div className={styles.points_container}>
              <Point text='Главная' to='/' />
              <Point text='Каталог' to='/catalog' />
              <Point text='Контакты' to='/contacts' />
            </div>
            <div className={styles.phone_container}>
              <div className={styles.phone_icon}>
                <SVGCall />
              </div>
              <div className={styles.phone_text_head}>
                <p className={styles.phone_numbers}>8-880-546-52-98</p>
                <p className={styles.phone_clock}>Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
            <div className={styles.buttons_container}>
              {isLogin && (
                <div className={styles.btn_cart} onClick={cartIconClick}>
                  <SVGCart />
                  {cartItemsCount > 0 ? (
                    <div className={styles.cart_items_count}>
                      <p>{cartItemsCount}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )}
              {isLogin ? (
                <div className={styles.btn_account} onClick={accountIconClick}>
                  <SVGAccount />
                </div>
              ) : (
                <LinkButton text='Войти' to='/login' bcolor='white' tcolor='black' border='1px solid #dfdfdf' radius={3} />
              )}
            </div>
          </div>
        </div>
      )}
      {storeCart.isCartOpened && <PopupCart />}
    </>
  )
}

export default observer(Header)
