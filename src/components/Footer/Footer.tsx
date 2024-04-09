import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.block} style={{ backgroundColor: '#9DA391', height: 'auto', padding: '80px 0' }}>
      <div className={styles.container1200}>
        <div className={styles.links_container}>
          <div className={styles.links_column}>
            <h2 className={styles.links_column_header}>Контакты</h2>
            <div className={styles.links_column_links_container}>
              <Link className={styles.links_column_link} to='/contacts'>
                E-mail
              </Link>
              <Link className={styles.links_column_link} to='/contacts'>
                Связаться с нами
              </Link>
              <Link className={styles.links_column_link} to='/contacts'>
                Местонахождение
              </Link>
            </div>
          </div>
          <div className={styles.links_column}>
            <h2 className={styles.links_column_header}>Популярное</h2>
            <div className={styles.links_column_links_container}>
              <Link className={styles.links_column_link} to='/flower/1'>
                Летний чабер
              </Link>
              <Link className={styles.links_column_link} to='/flower/2'>
                Величественный кактус
              </Link>
              <Link className={styles.links_column_link} to='/flower/3'>
                Дикий кактус
              </Link>
            </div>
          </div>
          <div className={styles.links_column}>
            <h2 className={styles.links_column_header}>Источники</h2>
            <div className={styles.links_column_links_container}>
              <Link className={styles.links_column_link} to='/guarantee'>
                Гарантия на товар
              </Link>
              <Link className={styles.links_column_link} to='/payment_and_delivery'>
                Доставка и оплата
              </Link>
              <Link className={styles.links_column_link} to='/login'>
                Вход
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright_container}>
          <h2 className={styles.copyright_text}>@ Хамелеон, 40 лет Победы д.61 </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
