import React from 'react'
import styles from './Account.module.css'
import { useNavigate } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ActionButton } from '@components/ActionButton'
import axios from 'axios'

const Account = () => {
  const navigate = useNavigate()

  const ref_fd_new_address = React.useRef<HTMLInputElement>(null!)

  const [userdata, setUserdata] = React.useState(null!)
  React.useEffect(() => {
    const userdata = JSON.parse(window.localStorage.getItem('userdata'))
    setUserdata(userdata)
  }, [])

  const [isOpenPopupChangeAddress, setIsOpenPopupChangeAddress] = React.useState(false)
  const changeAddressClick = () => {
    setIsOpenPopupChangeAddress(true)
  }

  const applyNewAddressClick = async () => {
    const url = `http://localhost:3001/users/address`
    const data = {
      phone_number: userdata?.phone_number,
      address: ref_fd_new_address.current.value,
    }
    if (userdata) {
      const response = (await axios.patch(url, data)).data
      const status = response.status
      if (status === 'ok') {
        const new_userdata = { ...userdata }
        new_userdata.delivery_address = ref_fd_new_address.current.value
        setUserdata(new_userdata)
        setIsOpenPopupChangeAddress(false)
        window.localStorage.setItem('userdata', JSON.stringify(new_userdata))
      }
    }
  }

  const exitAccountClick = () => {
    window.localStorage.removeItem('userdata')
    navigate('/')
  }

  return (
    <>
      {isOpenPopupChangeAddress && (
        <div className={styles.over_container}>
          <div className={styles.pop_change_address}>
            <div className={styles.pop_change_items_container}>
              <div className={styles.pop_change_item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className={styles.pop_change_title}>Изменить адрес доставки</h1>
              </div>
              <div className={styles.pop_change_item}>
                <input ref={ref_fd_new_address} type='text' className={styles.fd_new_address} placeholder='Введите новый адрес для доставки' />
              </div>
              <div className={styles.pop_change_item} style={{ display: 'flex', gap: 5 }}>
                <ActionButton text='Подтвердить' width={'100%'} action={applyNewAddressClick} />
                <ActionButton text='Отмена' action={() => setIsOpenPopupChangeAddress(false)} bcolor='#eaeaea' tcolor='black' />
              </div>
            </div>
          </div>
        </div>
      )}

      <Header />
      <div className={styles.block} style={{ height: '100vh', padding: '160px 0 120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.user_info_container}>
            <div className={styles.user_info}>
              <p className={styles.user_info_text}>
                Номер телефона: <span>{userdata?.phone_number}</span>
              </p>
            </div>
            <div className={styles.user_info}>
              <p className={styles.user_info_text}>
                Имя: <span>{userdata?.firstname}</span>
              </p>
            </div>
            <div className={styles.user_info}>
              <p className={styles.user_info_text}>
                Фамилия: <span>{userdata?.lastname}</span>
              </p>
            </div>
            <div className={styles.user_info}>
              <p className={styles.user_info_text}>
                Адрес для доставки: <span>{userdata?.delivery_address === '' ? 'Отсутствует' : userdata?.delivery_address}</span>
              </p>
              <button className={styles.btn_change_address} onClick={changeAddressClick}>
                Изменить
              </button>
            </div>
            <div className={styles.user_info}>
              <button className={styles.btn_change_address} onClick={exitAccountClick}>
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account
