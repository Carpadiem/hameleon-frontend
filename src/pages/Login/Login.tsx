import React from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { ActionButton } from '@components/ActionButton'
import { LinkButton } from '@components/LinkButton'
// axios
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const ref_fd_number = React.useRef<HTMLInputElement>(null!)
  const ref_fd_password = React.useRef<HTMLInputElement>(null!)

  const loginClick = async () => {
    const phone_number = ref_fd_number.current.value
    const password = ref_fd_password.current.value

    if (phone_number === '' || password === '') {
      alert('Не все поля заполнены')
    }

    const url = `http://185.198.152.102:3001/users/login`
    const data = {
      phone_number: phone_number,
      password: password,
    }
    const response = (await axios.post(url, data)).data
    const user = response.user
    const status = response.status

    if (status === 'ok') {
      window.localStorage.setItem('userdata', JSON.stringify(user))
      navigate('/')
    } else if (status === 'wrongPassword') {
      alert('Неверный пароль')
    } else if (status === 'userNotFound') {
      alert('Пользователя с таким номером нет')
    }
  }

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
              <input ref={ref_fd_number} type='text' placeholder='(+7) Номер телефона' name='phone_number' className={styles.fd} />
              <input ref={ref_fd_password} type='password' placeholder='Пароль' name='password' className={styles.fd} />
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
