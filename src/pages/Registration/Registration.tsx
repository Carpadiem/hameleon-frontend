import React from 'react'
import styles from './Registration.module.css'
// components
import { Header } from '@components/Header'
import { ActionButton } from '@components/ActionButton'
import { LinkButton } from '@components/LinkButton'

const Registration = () => {
  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: '100vh', overflow: 'visible' }}>
        <div className={styles.container1200}>
          <div className={styles.form}>
            <div className={styles.title_container}>
              <h1 className={styles.title}>Регистрация</h1>
            </div>
            <div className={styles.items_container}>
              <input type='text' placeholder='(+7) Номер телефона' name='phone_number' className={styles.fd} />
              <input type='text' placeholder='Ваше имя' name='phone_number' className={styles.fd} />
              <input type='text' placeholder='Пароль' name='password' className={styles.fd} />
              <input type='text' placeholder='Повторите пароль' name='phone_number' className={styles.fd} />
              <ActionButton text='Зарегистрироваться' height={45} action={() => {}} />
              <LinkButton text='Уже есть аккаунт? Войти' height={45} bcolor='transparent' tcolor='rgb(48, 108, 237)' to='/login' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
