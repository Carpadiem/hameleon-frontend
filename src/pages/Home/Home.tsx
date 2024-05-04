import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { LinkButton } from '@components/LinkButton'
// images
import PNGNut from '/images/nut.png'
import PNGCart from '/images/cart.png'
import PNGGift from '/images/gift.png'
import PNGEmpAv1 from '/images/employee_avatars/emp_1.png'
import PNGEmpAv2 from '/images/employee_avatars/emp_2.png'
import PNGEmpAv3 from '/images/employee_avatars/emp_3.png'
import PNGEmpAv4 from '/images/employee_avatars/emp_4.png'
import PNGSlider1 from '/images/slider/slider_1.jpg'
import PNGSlider2 from '/images/slider/slider_2.jpg'
import PNGSlider3 from '/images/slider/slider_3.jpg'

// json
import ShopPlants from '../../assets/plants.json'

const sliderDelay = 3000

const Home = () => {
  const [images, setImages] = React.useState([PNGSlider1, PNGSlider2, PNGSlider3])
  const [imgIndex, setImgIndex] = React.useState(0)
  const ref_timeout = React.useRef<NodeJS.Timeout>(null!)

  const [shopPlants, setShopPlants] = React.useState(ShopPlants)

  function resetTimeout() {
    if (ref_timeout.current) clearTimeout(ref_timeout.current)
  }

  React.useEffect(() => {
    resetTimeout()
    ref_timeout.current = setTimeout(() => setImgIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)), sliderDelay)
    return () => {
      resetTimeout()
    }
  }, [imgIndex])

  return (
    <>
      <Header />
      <div className={styles.block} style={{ backgroundColor: 'transparent', height: '100vh' }}>
        <div className={styles.bg_slider_container} style={{ transform: `translate3d(${-imgIndex * 100}vw, 0, 0)` } as React.CSSProperties}>
          {images.map((image, index) => {
            return <img key={index} src={image} alt='' className={styles.slider_image} />
          })}
        </div>
        <div className={styles.container1200}>
          <div className={styles.welcome_text_container}>
            <h1 className={styles.welcome_title}>Цветочный магазин с бесплатной доставкой по Набережным Челнам</h1>
            <p className={styles.welcome_subtitle}>Доставим ваши любимые растения быстро в целости и сохранности</p>
            <LinkButton text='Перейти в каталог' to='/catalog' width={180} height={60} radius={4} bcolor='#426545' />
          </div>
        </div>
      </div>
      <div className={styles.block} style={{ backgroundColor: 'white', height: 'auto', padding: '120px 0' }}>
        <div className={styles.container1200_2}>
          <div className={styles.block_header_container}>
            <h1 className={styles.block_header_text} style={{ color: '#2E363E' }}>
              Наши актуальные растения
            </h1>
          </div>
          <div className={styles.plant_previews_container}>
            {shopPlants.map((plant, index) =>
              index < 6 ? (
                <Link to={`/flower/${plant.id}`} key={index}>
                  <div className={styles.plant_preview}>
                    <img src={plant.imagePubPath} alt='' className={styles.plant_preview_image} />
                  </div>
                </Link>
              ) : null
            )}
          </div>
          <div className={styles.buttons_container}>
            <LinkButton text='Перейти в каталог' to='/catalog' width={180} height={60} radius={4} bcolor='#426545' />
          </div>
        </div>
      </div>
      <div className={styles.block} style={{ backgroundColor: '#9DA391', height: 'auto', padding: '120px 0' }}>
        <div className={styles.container1200_3}>
          <div className={styles.block_header_container}>
            <h1 className={styles.block_header_text} style={{ color: 'white' }}>
              Что вы получаете покупая товары у нас?
            </h1>
          </div>
          <div className={styles.features_container}>
            <div className={styles.feature_frame}>
              <img src={PNGNut} alt='' className={styles.feature_icon} />
              <h2 className={styles.feature_title}>Экономию времени</h2>
              <p className={styles.feature_text}>Наш грамотно подобранный персонал скоординирует вас с покупкой</p>
            </div>
            <div className={styles.feature_frame}>
              <img src={PNGCart} alt='' className={styles.feature_icon} />
              <h2 className={styles.feature_title}>Огромный выбор товаров</h2>
              <p className={styles.feature_text}>На сайте представлено множество экзотический растений и фруктов, каждый найдет что-то свое</p>
            </div>
            <div className={styles.feature_frame}>
              <img src={PNGGift} alt='' className={styles.feature_icon} />
              <h2 className={styles.feature_title}>Низкие цены</h2>
              <p className={styles.feature_text}>Выбирая нас - вы откладываете больше в свой кошелек, постоянным клиентам-скидки</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block} style={{ backgroundColor: 'white', height: 'auto', padding: '120px 0' }}>
        <div className={styles.container1200_4}>
          <div className={styles.block_header_container}>
            <h1 className={styles.block_header_text} style={{ color: '#2E363E' }}>
              Наши флористы
            </h1>
            <p className={styles.block_header_subtext} style={{ color: '#2E363E', marginTop: '30px', width: '80%' }}>
              Идеальное сочетание творчества, энергии, общения, счастья и любви. Позвольте нам создать для вас улыбку.
            </p>
            <div className={styles.employees_container}>
              <div className={styles.employee_frame}>
                <img src={PNGEmpAv1} alt='' className={styles.emp_avatar} />
                <h2 className={styles.emp_name}>Дарья Новицкая</h2>
                <p className={styles.emp_working_position}>Флорист</p>
              </div>
              <div className={styles.employee_frame}>
                <img src={PNGEmpAv2} alt='' className={styles.emp_avatar} />
                <h2 className={styles.emp_name}>Софья Никтаровна</h2>
                <p className={styles.emp_working_position}>Менеджер</p>
              </div>
              <div className={styles.employee_frame}>
                <img src={PNGEmpAv3} alt='' className={styles.emp_avatar} />
                <h2 className={styles.emp_name}>Анжела Дружинина</h2>
                <p className={styles.emp_working_position}>Флорист</p>
              </div>
              <div className={styles.employee_frame}>
                <img src={PNGEmpAv4} alt='' className={styles.emp_avatar} />
                <h2 className={styles.emp_name}>Аманда Водскинг</h2>
                <p className={styles.emp_working_position}>Флорист</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
