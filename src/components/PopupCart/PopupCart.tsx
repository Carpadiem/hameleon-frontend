import React from 'react'
import styles from './PopupCart.module.css'
import { useNavigate } from 'react-router-dom'
//components
import { ActionButton } from '@components/ActionButton'
import { LinkButton } from '@components/LinkButton'

// stores, mobx
import { observer } from 'mobx-react-lite'
import storeCart, { ICartItem } from '@stores/storeCart'
import ICatalogPlant from '@models/ICatalogPlant'
import axios from 'axios'

const PopupCart = () => {
  const navigate = useNavigate()

  const closeClick = () => {
    storeCart.setIsCartOpened(false)
  }

  const [totalCost, setTotalCost] = React.useState(0)
  React.useEffect(() => {
    let cost = 0
    storeCart.cart.items.map((item) => {
      cost += item.price
    })
    setTotalCost(cost)
  })

  const removeItemClick = (itemId: number) => {
    storeCart.remove(itemId)
    if (storeCart.cart.items.length === 0) closeClick()
  }

  const payClick = () => {
    storeCart.isCartOpened = false
    navigate('/payment')
  }

  const checkoutOrderHandler = async () => {
    const userdata = window.localStorage.getItem('userdata')
    const json_userdata = JSON.parse(userdata)

    const order = {
      phone_number: json_userdata.phone_number,
      delivery_point: json_userdata.delivery_address,
      order_from_cart: JSON.stringify(storeCart.cart.items),
      status: 'opened',
    }

    const response = await axios.post('http://185.198.152.102:3001/orders/create', { ...order })

    if (response.data.status === 200) {
      alert('Успешное оформление заказа')
      closeClick()
      storeCart.clear()
    } else {
      alert('Возникла ошибка, обратитесь в поддержку')
    }
  }

  return (
    <>
      <div className={styles.block}>
        <div className={styles.container1200}>
          <div className={styles.popup_frame}>
            <div className={styles.title_container}>
              <h2 className={styles.title}>Оформление заказа</h2>
              <button className={styles.btn_close} onClick={closeClick}>
                ✖
              </button>
            </div>
            <div className={styles.items_container}>
              {storeCart.cart.items.length === 0 ? (
                <p className={styles.empty_cart_text}>Корзина пустая</p>
              ) : (
                storeCart.cart.items.map((item: ICartItem) => (
                  <div className={styles.cart_item_container} key={item.cartId}>
                    <div className={styles.container_left}>
                      <img src={item.imagePubPath} alt='' className={styles.cart_item_image} />
                      <p className={styles.cart_item_name}>{item.name}</p>
                    </div>
                    <div className={styles.container_right}>
                      <p className={styles.cart_item_price}>{item.price} ₽</p>
                      <button className={styles.btn_remove_item} onClick={() => removeItemClick(item.cartId)}>
                        ✖
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className={styles.totals_container}>
              <p className={styles.total_text}>Итого: {totalCost} ₽</p>
              <p className={styles.total_text}>Скидка: 10%</p>
              <p className={styles.total_text}>Итого со скидкой: {Math.round(totalCost - totalCost / 10)} ₽</p>
            </div>
            {storeCart.cart.items.length > 0 ? (
              <div className={styles.buttons_container}>
                <button className={styles.btn_goto_pay} onClick={checkoutOrderHandler}>
                  Оформить заказ
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(PopupCart)
