import React from 'react'
import styles from './Contacts.module.css'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ActionButton } from '@components/ActionButton'
// svg
import SVGMarker from '@svg/marker.svg?react'

const Contacts = () => {
  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: 'auto', padding: '180px 0 120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.left_container}>
            <div className={styles.prop}>
              <div className={styles.prop_svg}></div>
              <p className={styles.prop_title}>Адрес</p>
              <p className={styles.prop_text}>40 лет Победы д.61</p>
            </div>
            <div className={styles.prop}>
              <div className={styles.prop_svg}></div>
              <p className={styles.prop_title}>Телефон</p>
              <p className={styles.prop_text}>8-880-546-52-98</p>
              <p className={styles.prop_text}>+7-953-492-76-76</p>
            </div>
            <div className={styles.prop}>
              <div className={styles.prop_svg}></div>
              <p className={styles.prop_title}>Электронная почта</p>
              <p className={styles.prop_text}>efertiti07@mail.ru</p>
              <p className={styles.prop_text}>mst@promkip.ru</p>
            </div>
          </div>
          <div className={styles.vseparator} />
          <div className={styles.right_container}>
            <p className={styles.right_title}>Отправьте нам сообщение</p>
            <p className={styles.right_description}>
              Если остались вопросы, укажите ваш телеграм для связи. Мы свяжемся в течении 30 минут, чтобы уточнить ваш заказ.
            </p>
            <input type='text' placeholder='Ваш Telegram для связи' className={styles.fd_telegram} />
            <div className={styles.buttons_container}>
              <ActionButton text='Отправить' action={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A0eb77700247307972410ab5844358d6d8b3181d3becfe6ab103f92ecfc111abf&amp;source=constructor'
          width='100%'
          height='600'
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default Contacts
