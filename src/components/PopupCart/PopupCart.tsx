import React from 'react'
import styles from './PopupCart.module.css'

// stores, mobx
import { observer } from 'mobx-react-lite'
import storeCart from '@stores/storeCart'
import ICatalogPlant from '@models/ICatalogPlant'

const PopupCart = () => {
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
                storeCart.cart.items.map((item: ICatalogPlant) => (
                  <div className={styles.cart_item_container}>
                    <div className={styles.container_left}>
                      <img src={item.imagePubPath} alt='' className={styles.cart_item_image} />
                      <p className={styles.cart_item_name}>{item.name}</p>
                    </div>
                    <div className={styles.container_right}>
                      <p className={styles.cart_item_price}>{item.price} ₽</p>
                      <button className={styles.btn_remove_item} onClick={() => removeItemClick(item.id)}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(PopupCart)
