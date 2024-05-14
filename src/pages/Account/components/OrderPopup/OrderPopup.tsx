import React from 'react'
import styles from './OrderPopup.module.css'
import IOrder from '@models/IOrder'
import storeAccount from '@stores/storeAccount'

interface OrderPopupProps {
  order: IOrder
}
const OrderPopup = ({ order }: OrderPopupProps) => {
  const [totalCost, setTotalCost] = React.useState(0)

  React.useEffect(() => {
    let total = 0
    order.order_from_cart.map((item) => {
      const price_with_discount = item.price - Math.round(item.price / item.discount)
      total += price_with_discount
    })
    setTotalCost(total)
  }, [])

  const btn_close_handler = () => {
    storeAccount.setIsOrdersOpened(false)
  }

  return (
    <div className={styles.tint}>
      <div className={styles.frame}>
        <div className={styles.order_controls_container}>
          <button className={styles.btn_close_popup} onClick={btn_close_handler}>
            ×
          </button>
        </div>
        <div className={styles.order_params_container}>
          <div className={styles.order_param}>
            Номер заказа: <span>{order.id}</span>
          </div>
          <div className={styles.order_param}>
            Адрес доставки: <span>{order.delivery_point}</span>
          </div>
          <div className={styles.order_param}>
            Статус заказа: <span>{order.status === 'opened' ? 'Ожидает оплаты' : 'Закрыт'}</span>
          </div>
        </div>
        <h1 className={styles.title}>Товары в заказе:</h1>
        <div className={styles.order_items_container}>
          {order.order_from_cart.map((item, index) => (
            <div className={styles.order_item} key={index}>
              <div className={styles.left}>
                <img className={styles.item_image} src={item.imagePubPath} alt='' />
              </div>
              <div className={styles.right}>
                <p className={styles.item_param} style={{ fontSize: 18 }}>
                  <span>{item.name}</span>
                </p>
                <p className={styles.item_param}>
                  Цена: <span>{item.price}₽</span>
                </p>
                <p className={styles.item_param}>
                  Скидка: <span>{item.discount}%</span>
                </p>
                <p className={styles.item_param}>
                  Итоговая цена: <span>{item.price - Math.round(item.price / item.discount)}₽</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.order_payment_container}>
          <p className={styles.total_cost}>Итоговая стоимость заказа: {totalCost}₽</p>
          <button className={styles.btn_pay}>Перейти к оплате</button>
        </div>
      </div>
    </div>
  )
}

export default OrderPopup
