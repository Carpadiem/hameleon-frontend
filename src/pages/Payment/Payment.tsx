import React from 'react'
import styles from './Payment.module.css'
import { Link } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ActionButton } from '@components/ActionButton'
import { LinkButton } from '@components/LinkButton'

const Payment = () => {
  const [variant, setVariant] = React.useState<string>('card')
  const [address, setAddress] = React.useState<string>(null!)

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    try {
      const userdata = window.localStorage.getItem('userdata')
      if (userdata === 'undefined') {
      } else {
        const json_user_data = JSON.parse(userdata)
        const userdata_address = json_user_data.delivery_address
        setAddress(userdata_address)
        setIsLoggedIn(true)
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: '100vh', padding: '160px 0 120px 0' }}>
        {isLoggedIn && address !== '' && (
          <div className={styles.container1200}>
            <div className={styles.title_container}>
              <h1 className={styles.title_text}>Выберите способ оплаты</h1>
            </div>
            <div className={styles.address_container}>
              <p className={styles.address_text}>
                Адрес доставки: <span>{address}</span>
              </p>
            </div>
            <div className={styles.variants_container}>
              <div className={styles.variant} onClick={() => setVariant('card')}>
                <div className={styles.radio_selected_container}>
                  <div className={variant === 'card' ? styles.selected : styles.unselected}></div>
                </div>
                <p className={styles.variant_name}>Card</p>
              </div>
              <div className={styles.variant} onClick={() => setVariant('sbp')}>
                <div className={styles.radio_selected_container}>
                  <div className={variant === 'sbp' ? styles.selected : styles.unselected}></div>
                </div>
                <p className={styles.variant_name}>SBP</p>
              </div>
              <div className={styles.variant} onClick={() => setVariant('money')}>
                <div className={styles.radio_selected_container}>
                  <div className={variant === 'money' ? styles.selected : styles.unselected}></div>
                </div>
                <p className={styles.variant_name}>Money</p>
              </div>
              <div className={styles.variant} onClick={() => setVariant('epay')}>
                <div className={styles.radio_selected_container}>
                  <div className={variant === 'epay' ? styles.selected : styles.unselected}></div>
                </div>
                <p className={styles.variant_name}>EPay</p>
              </div>
            </div>
            <div className={styles.buttons_container} style={{ maxWidth: 200 }}>
              <ActionButton text='Оплатить' action={() => {}} />
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <div className={styles.container1200}>
            <div className={styles.title_container}>
              <h1 className={styles.falseLoggedText}>Войдите в аккаунт, прежде чем совершить оплату</h1>
            </div>
          </div>
        )}
        {address === '' && (
          <div className={styles.container1200}>
            <div className={styles.title_container}>
              <h1 className={styles.falseLoggedText}>Укажите адрес доставки в аккаунте</h1>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Payment
