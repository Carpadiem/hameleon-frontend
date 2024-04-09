import React from 'react'
import styles from './Login.module.css'
// components
import { Header } from '@components/Header'
import { ActionButton } from '@components/ActionButton'
import { LinkButton } from '@components/LinkButton'

const Login = () => {
  const loginClick = () => {}

  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: '100vh', overflow: 'visible' }}>
        <div className={styles.container1200}>
          <div className={styles.form}>
            <div className={styles.title_container}>
              <h1 className={styles.title}>Вход</h1>
            </div>
            <div className={styles.items_container}>
              <input type='text' placeholder='(+7) Номер телефона' name='phone_number' className={styles.fd} />
              <input type='text' placeholder='Пароль' name='password' className={styles.fd} />
              <ActionButton text='Войти' height={45} action={loginClick} />
              <LinkButton text='Нет аккаунта? Регистрация' height={45} bcolor='transparent' tcolor='rgb(48, 108, 237)' to='/registration' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
