import React from 'react'
import styles from './Flower.module.css'
import { useParams } from 'react-router-dom'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ActionButton } from '@components/ActionButton'
// models
import ICatalogPlant from '@models/ICatalogPlant'
// json
import ShopPlants from '../../assets/plants.json'
// stores, mobx
import storeCart from '@stores/storeCart'

const Flower = () => {
  const { id } = useParams()

  const [plantInfo, setPlantInfo] = React.useState<ICatalogPlant>(null!)
  React.useEffect(() => {
    const selected_plant = ShopPlants.filter((plant) => plant.id === Number(id))[0]
    setPlantInfo(selected_plant)
  }, [])

  const addToCartClick = () => {
    storeCart.add(plantInfo)
  }

  return (
    <>
      <Header />
      <div className={styles.block} style={{ height: 'auto', padding: '120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.header_container}>
            <h2 className={styles.title}>Наши растения</h2>
            <p className={styles.subtitle}>Цветы являются нашими источниками вдохновения</p>
          </div>

          <div className={styles.main_info_container}>
            <div className={styles.plant_image_container}>
              <img className={styles.plant_image} src={plantInfo?.imagePubPath} alt='' />
            </div>
            <div className={styles.vseparator}></div>
            <div className={styles.info_container}>
              <h2 className={styles.plant_name}>{plantInfo?.name}</h2>
              <p className={styles.plant_status}>Популярное комнатное растение</p>
              <p className={styles.plant_price}>{Math.round(plantInfo?.price - plantInfo?.price / plantInfo?.discount)} ₽</p>
              <p className={styles.plant_description}>
                Величественный кактус может стать отличным акцентом в домашнем декоре или на открытой террасе. Он придает помещению экзотический вид и добавляет
                нотку природы в интерьер. Кроме того, кактусы считаются символом выносливости и стойкости, что делает их популярным выбором для подарков и
                сувениров.
              </p>
              <div className={styles.buttons_container}>
                <ActionButton text='Добавить в корзину' action={addToCartClick} />
              </div>
              <div className={styles.additional_container}>
                <p className={styles.additional_text}>Артикул: 755{id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Flower
