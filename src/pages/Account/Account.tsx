// import React from 'react'
// import styles from './Account.module.css'
// import { useNavigate } from 'react-router-dom'
// // components
// import { Header } from '@components/Header'
// import { Footer } from '@components/Footer'
// import { ActionButton } from '@components/ActionButton'
// import axios from 'axios'

// const Account = () => {
//   const navigate = useNavigate()

//   const ref_fd_new_address = React.useRef<HTMLInputElement>(null!)

//   const [userdata, setUserdata] = React.useState(null!)
//   React.useEffect(() => {
//     const userdata = JSON.parse(window.localStorage.getItem('userdata'))
//     setUserdata(userdata)
//   }, [])

//   const [isOpenPopupChangeAddress, setIsOpenPopupChangeAddress] = React.useState(false)
//   const changeAddressClick = () => {
//     setIsOpenPopupChangeAddress(true)
//   }

//   const applyNewAddressClick = async () => {
//     const url = `http://localhost:3001/users/address`
//     const data = {
//       phone_number: userdata?.phone_number,
//       address: ref_fd_new_address.current.value,
//     }
//     if (userdata) {
//       const response = (await axios.patch(url, data)).data
//       const status = response.status
//       if (status === 'ok') {
//         const new_userdata = { ...userdata }
//         new_userdata.delivery_address = ref_fd_new_address.current.value
//         setUserdata(new_userdata)
//         setIsOpenPopupChangeAddress(false)
//         window.localStorage.setItem('userdata', JSON.stringify(new_userdata))
//       }
//     }
//   }

//   const exitAccountClick = () => {
//     window.localStorage.removeItem('userdata')
//     navigate('/')
//   }

//   return (
//     <>
// {isOpenPopupChangeAddress && (
//   <div className={styles.over_container}>
//     <div className={styles.pop_change_address}>
//       <div className={styles.pop_change_items_container}>
//         <div className={styles.pop_change_item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <h1 className={styles.pop_change_title}>Изменить адрес доставки</h1>
//         </div>
//         <div className={styles.pop_change_item}>
//           <input ref={ref_fd_new_address} type='text' className={styles.fd_new_address} placeholder='Введите новый адрес для доставки' />
//         </div>
//         <div className={styles.pop_change_item} style={{ display: 'flex', gap: 5 }}>
//           <ActionButton text='Подтвердить' width={'100%'} action={applyNewAddressClick} />
//           <ActionButton text='Отмена' action={() => setIsOpenPopupChangeAddress(false)} bcolor='#eaeaea' tcolor='black' />
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//       <Header />
//       <div className={styles.block} style={{ height: '100vh', padding: '160px 0 120px 0' }}>
//         <div className={styles.container1200}>
//           <div className={styles.user_info_container}>
//             <div className={styles.user_info}>
//               <p className={styles.user_info_text}>
//                 Номер телефона: <span>{userdata?.phone_number}</span>
//               </p>
//             </div>
//             <div className={styles.user_info}>
//               <p className={styles.user_info_text}>
//                 Имя: <span>{userdata?.firstname}</span>
//               </p>
//             </div>
//             <div className={styles.user_info}>
//               <p className={styles.user_info_text}>
//                 Фамилия: <span>{userdata?.lastname}</span>
//               </p>
//             </div>
//             <div className={styles.user_info}>
//               <p className={styles.user_info_text}>
//                 Адрес для доставки: <span>{userdata?.delivery_address === '' ? 'Отсутствует' : userdata?.delivery_address}</span>
//               </p>
//               <button className={styles.btn_change_address} onClick={changeAddressClick}>
//                 Изменить
//               </button>
//             </div>
//             <div className={styles.user_info}>
//               <button className={styles.btn_change_address} onClick={exitAccountClick}>
//                 Выйти из аккаунта
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Account

import React from 'react'
import styles from './Account.module.css'
import { useNavigate } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import axios from 'axios'
import IOrder from '@models/IOrder'
import { OrderPopup } from './components/OrderPopup'
// mobx, stores
import storeAccount from '@stores/storeAccount'
import { observer } from 'mobx-react-lite'
import { ActionButton } from '@components/ActionButton'

interface MenuTabProps {
  text: string
  isActive?: boolean
  onClick?: () => void
}
function MenuTab({ text, isActive = false, onClick }: MenuTabProps) {
  return (
    <div className={isActive ? styles.menu_tab_active : styles.menu_tab} onClick={onClick}>
      <p className={isActive ? styles.tab_text_active : styles.tab_text}>{text}</p>
    </div>
  )
}

const Account = () => {
  const navigate = useNavigate()

  const ref_fd_new_address = React.useRef<HTMLInputElement>(null!)

  // profile
  // orders
  const [menuTab, setMenuTab] = React.useState('profile')

  const [userdata, setUserdata] = React.useState(null!)
  const [myOrders, setMyOrders] = React.useState<IOrder[]>([])
  React.useEffect(() => {
    const userdata = JSON.parse(window.localStorage.getItem('userdata'))
    setUserdata(userdata)

    // get orders from db
    const response = axios.get(`http://localhost:3001/orders/${userdata.phone_number}`).then((res) => {
      setMyOrders(res.data)
    })
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

  const [showedOrderPopupId, setShowedOrderPopupId] = React.useState(0)

  const order_click_handler = (order_id: number) => {
    setShowedOrderPopupId(order_id)
    storeAccount.setIsOrdersOpened(true)
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

      {/* order popup */}
      {storeAccount.isOrdersOpened && <OrderPopup order={myOrders.filter((order) => order.id === showedOrderPopupId)[0]} />}
      <Header />
      <div className={styles.block} style={{ height: '100vh', padding: '140px 0 120px 0' }}>
        <div className={styles.container1200}>
          {/* menu tabs */}
          <div className={styles.menu_container}>
            <MenuTab text='Профиль' isActive={menuTab === 'profile'} onClick={() => setMenuTab('profile')} />
            <MenuTab text='Мои заказы' isActive={menuTab === 'orders'} onClick={() => setMenuTab('orders')} />
          </div>

          {/* profile */}
          {menuTab === 'profile' && (
            <div className={styles.profile_container}>
              <h1 className={styles.profile_title}>
                {userdata?.firstname} {userdata?.lastname}
              </h1>
              <p className={styles.profile_param}>
                Номер телефона: <span>{userdata?.phone_number}</span>
              </p>
              <p className={styles.profile_param} style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'inline-block' }}>
                  Адрес доставки: <span>{userdata?.delivery_address}</span>
                </div>
                <button className={styles.btn_change_address} onClick={changeAddressClick}>
                  Изменить
                </button>
              </p>
              <p className={styles.profile_param}>
                <button className={styles.btn_change_address} onClick={exitAccountClick}>
                  Выйти из аккаунта
                </button>
              </p>
            </div>
          )}

          {/* orders */}
          {menuTab === 'orders' && (
            <div className={styles.orders_container}>
              {myOrders.map((order) => (
                <div className={styles.order_line} key={order.id} onClick={() => order_click_handler(order.id)}>
                  <p className={styles.order_id}>Номер заказа: {order.id}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default observer(Account)
