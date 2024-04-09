import React from 'react'
import styles from './Guarantee.module.css'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

const Guarantee = () => {
  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: 'auto', padding: '160px 0 120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.title_container}>
            <h1 className={styles.title_text}>Гарантия на товар</h1>
            <p className={styles.subtitle_text}>Цветы являются нашими источниками вдохновения</p>
          </div>
          <div className={styles.general_text_container}>
            <p className={styles.general_text}>
              Возврат денежных средств осуществляется в течение <b>14 дней</b> с момента осуществления продажи.
              <br />
              <br />
              <b>Когда делается возврат:</b>
              <br />
              <br />
              <ol>
                <li>В случае осуществления клиентом предоплаты заказа с доставкой и не осуществления доставки компанией Хамелеон</li>
                <li>
                  В случае несоответствия качества букета заявленному (для осуществления возврата необходимо в течение суток привезти букет в магазин либо
                  предоставить фото)
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Guarantee
