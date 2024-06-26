import React from 'react'
import styles from './Contacts.module.css'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ActionButton } from '@components/ActionButton'
// svg
import SVGMark from '@svg/mark.svg?react'
import SVGPhone from '@svg/phone.svg?react'
import SVGMail from '@svg/mail.svg?react'
import axios from 'axios'
import { url } from 'inspector'

const Contacts = () => {
  const ref_fd_user_telegram = React.useRef<HTMLInputElement>(null!)

  const telegramSendClick = async () => {
    const token = '7148220551:AAGlO7q9o93x7pbHY4nTQqc6X4ymBWyeYbg'
    const method = 'sendMessage'
    const user_telegram = ref_fd_user_telegram.current.value

    if (user_telegram !== '') {
      const message_form = `Пользователь оставил на сайте свой телеграм: ${user_telegram}`
      const response = await axios.post(`https://api.telegram.org/bot${token}/${method}`, { chat_id: 610837220, text: message_form })
    } else {
      alert('Заполните поле "Ваш телеграм для связи"')
    }
  }

  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(()=>{
    if (window.innerWidth < 480 && window.innerWidth > 320) {
      setIsMobile(true)
    } 
  }, [])

  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: 'auto', padding: isMobile ? '120px 0 40px 0' : '180px 0 120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.left_container} style={{
            display: isMobile ? 'none' : 'flex'
          } as React.CSSProperties}>
            <div className={styles.prop}>
              <div className={styles.prop_svg}>
                <SVGMark width={26} />
              </div>
              <p className={styles.prop_title}>Адрес</p>
              <p className={styles.prop_text}>40 лет Победы д.61</p>
            </div>
            <div className={styles.prop}>
              <div className={styles.prop_svg}>
                <SVGPhone width={30} />
              </div>
              <p className={styles.prop_title}>Телефон</p>
              <p className={styles.prop_text}>8-880-546-52-98</p>
              <p className={styles.prop_text}>+7-953-492-76-76</p>
            </div>
            <div className={styles.prop}>
              <div className={styles.prop_svg}>
                <SVGMail width={30} />
              </div>
              <p className={styles.prop_title}>Электронная почта</p>
              <p className={styles.prop_text}>efertiti07@mail.ru</p>
              <p className={styles.prop_text}>mst@promkip.ru</p>
            </div>
          </div>
          <div className={styles.vseparator} />
          <div className={styles.right_container}>
            <p className={styles.right_title}>Отправьте нам сообщение</p>
            <p className={styles.right_description}>
              Если остались вопросы, укажите ваш телеграм для связи. Мы свяжемся в течении 30 минут, чтобы уточнить ваш заказ.
            </p>
            <input type='text' ref={ref_fd_user_telegram} placeholder='Ваш Telegram для связи' className={styles.fd_telegram} />
            <div className={styles.buttons_container}>
              <button className={styles.btn_send_tg} onClick={telegramSendClick}>
                Отправить
              </button>
              {/* <ActionButton text='Отправить' action={telegramSendClick} /> */}
            </div>
          </div>

          <div className={styles.left_container} style={{
            display: isMobile ? 'flex' : 'none'
          } as React.CSSProperties}>
            <div className={styles.prop}>
              <div className={styles.prop_svg}>
                <SVGMark width={26} />
              </div>
              <p className={styles.prop_title}>Адрес</p>
              <p className={styles.prop_text}>40 лет Победы д.61</p>
            </div>
            <div className={styles.prop}>
              <div className={styles.prop_svg}>
                <SVGPhone width={30} />
              </div>
              <p className={styles.prop_title}>Телефон</p>
              <p className={styles.prop_text}>8-880-546-52-98</p>
              <p className={styles.prop_text}>+7-953-492-76-76</p>
            </div>
            <div className={styles.prop}>
              <div className={styles.prop_svg}>
                <SVGMail width={30} />
              </div>
              <p className={styles.prop_title}>Электронная почта</p>
              <p className={styles.prop_text}>efertiti07@mail.ru</p>
              <p className={styles.prop_text}>mst@promkip.ru</p>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.block} style={{ height: isMobile ? '300px' : 'auto' }}>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A0eb77700247307972410ab5844358d6d8b3181d3becfe6ab103f92ecfc111abf&amp;source=constructor'
          width='100%'
          height='600'
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default Contacts
