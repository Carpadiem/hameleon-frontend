import React from 'react'
import styles from './Registration.module.css'
import { useNavigate } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { ActionButton } from '@components/ActionButton'
import { LinkButton } from '@components/LinkButton'
// axios
import axios from 'axios'

import CryptoJS from 'crypto-js'

const Registration = () => {
  const navigate = useNavigate()

  const [check, setCheck] = React.useState(false)
  const check_change_handle = () => {
    setCheck((prev) => !prev)
  }

  const ref_fd_number = React.useRef<HTMLInputElement>(null!)
  const ref_fd_firstname = React.useRef<HTMLInputElement>(null!)
  const ref_fd_lastname = React.useRef<HTMLInputElement>(null!)
  const ref_fd_password = React.useRef<HTMLInputElement>(null!)
  const ref_fd_repeat_password = React.useRef<HTMLInputElement>(null!)

  const registrationClick = async () => {
    const phone_number = ref_fd_number.current.value
    const firstname = ref_fd_firstname.current.value
    const lastname = ref_fd_lastname.current.value
    const password = ref_fd_password.current.value
    const repeat_password = ref_fd_repeat_password.current.value

    // validation
    if (phone_number === '' || firstname === '' || lastname === '' || password === '' || repeat_password === '') {
      alert('Не все поля заполнены')
      return
    } else if (password !== repeat_password) {
      alert('Пароли не совпадают')
      return
    } else if (!check) {
      alert('Регистрация не может быть пройдена без вашего согласия на обработку персональных данных')
      return
    }

    // build & make request
    const url = `http://185.198.152.102/backapi/users/registration`

    const password_hash = CryptoJS.MD5(password)
    const data = {
      phone_number: phone_number,
      firstname: firstname,
      lastname: lastname,
      password: password_hash,
    }
    const response = await axios.post<{ status: string }>(url, data)

    // answer
    //
    if (response.data.status === 'ok') {
      alert('Успешная регистрация')
      navigate('/')
    } else {
      alert('Пользователь с таким номером уже есть')
    }
  }

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
              <input required type='text' ref={ref_fd_number} placeholder='(+7) Номер телефона' className={styles.fd} />
              <input required type='text' ref={ref_fd_firstname} placeholder='Имя' className={styles.fd} />
              <input required type='text' ref={ref_fd_lastname} placeholder='Фамилия' className={styles.fd} />
              <input required type='password' ref={ref_fd_password} placeholder='Придумайте пароль' className={styles.fd} />
              <input required type='password' ref={ref_fd_repeat_password} placeholder='Повторите пароль' className={styles.fd} />
              <form className={styles.form_policy}>
                <label className={styles.policy}>
                  <input type='checkbox' onChange={check_change_handle} /> Я согласен на обработку персональных данных
                </label>
              </form>
              <ActionButton text='Зарегистрироваться' height={45} action={registrationClick} />
              <LinkButton text='Уже есть аккаунт? Войти' height={45} bcolor='transparent' tcolor='rgb(48, 108, 237)' to='/login' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
