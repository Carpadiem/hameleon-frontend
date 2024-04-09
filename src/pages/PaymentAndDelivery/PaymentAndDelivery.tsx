import React from 'react'
import styles from './PaymentAndDelivery.module.css'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

const PaymentAndDelivery = () => {
  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: 'auto', padding: '160px 0 120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.title_container}>
            <h1 className={styles.title_text}>Оплата и доставка </h1>
            <p className={styles.subtitle_text}>Цветы являются нашими источниками вдохновения</p>
          </div>
          <div className={styles.general_text_container}>
            <p className={styles.general_text}>
              <b>СПОСОБЫ ОПЛАТЫ</b>
              <br />
              <ol>
                <li>Наличными или банковской картой в магазине;</li>
                <li>Наличными курьеру (осуществляется в предпраздничные дни и праздники: день матери, 14 февраля, 8 марта, 1 сентября);</li>
                <li>
                  Онлайн на сайте: Банковской картой VISA, MasterCard и МИР ( Могут оплачивать даже клиенты из других стран и банков других стран) - Google Pay
                  и Apple Pay - Сбербанк Онлайн - Альфа - Клик - Киви кошелек - WEB Money - Наличными в терминалах оплаты - Банковской картой JSB, Dinners Club,
                  American Exspress
                </li>
              </ol>
              <br />
              <br />
              <b>ДОСТАВКА</b>
              <br />
              Мы делаем бесплатную доставку в пределах города при заказе от 1500 руб. (отдаленные районы платно) в часовых интервалах: с 9:00 до 13:00; с 13:00
              до 17:00; с 17:00 до 21:00 Бесплатная доставка в предпраздничные дни (6,7 марта) и праздничный день (8 марта) осуществляется при заказе от 2000
              руб.
              <br />
              <br />
              <b>ВОЗВРАТ</b>
              <br />
              Возврат денежных средств осуществляется в течение 14 дней с момента осуществления продажи.
              <br />
              <br />
              <b>Когда делается возврат:</b>
              <br />
              <ul>
                <li>В случае осуществления клиентом предоплаты заказа с доставкой и не осуществления доставки компанией Хамелеон.</li>
                <li>
                  В случае, когда букет надлежащего качества был доставлен по заявленному адресу в заявленное время, но получатель отказался от букета по
                  независящим от компании ДОМ РОЗ причинам, возврат денежных средств будет осуществлен с вычетом стоимости доставки.
                </li>
                <li>
                  В случае несоответствия качества букета заявленному (для осуществления возврата необходимо в течение суток привезти букет в магазин либо
                  предоставить фото в собранном виде, как он был доставлен).
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentAndDelivery
