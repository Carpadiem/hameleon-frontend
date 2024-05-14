import React from 'react'
import styles from './Catalog.module.css'
// components
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { CardPlant } from './components/CardPlant'
// models
import ICatalogPlant from '@models/ICatalogPlant'
// json
import ShopPlants from '../../assets/plants.json'
// stores, mobx
import storeCart from '@stores/storeCart'

const Catalog = () => {
  const [plants, setPlants] = React.useState<ICatalogPlant[]>(ShopPlants)
  const [categoryBytab, setCategoryByTab] = React.useState('all')

  const addToCartClick = (plant: ICatalogPlant) => {
    // check if user logged in
    const userdata = window.localStorage.getItem('userdata')
    if (userdata === '' || userdata == null) {
      alert('Войдите в аккаунт')
      return
    }
    // add to cart
    storeCart.add(plant)
  }

  return (
    <>
      <Header />
      <div className={styles.block} style={{ padding: '120px 0 120px 0' }}>
        <div className={styles.container1200}>
          <div className={styles.header_container}>
            <h2 className={styles.header_text}>Необычные комнатные растения на любой вкус и цвет </h2>
          </div>
          <div className={styles.tabs_container}>
            <div className={styles.tab} onClick={() => setCategoryByTab('all')}>
              <p className={styles.tab_text} style={{ color: categoryBytab === 'all' ? '#426545' : '#2E363E' }}>
                Растения
              </p>
            </div>
            <div className={styles.tab} onClick={() => setCategoryByTab('cactus')}>
              <p className={styles.tab_text} style={{ color: categoryBytab === 'cactus' ? '#426545' : '#2E363E' }}>
                Кактусы
              </p>
            </div>
            <div className={styles.tab} onClick={() => setCategoryByTab('exotic')}>
              <p className={styles.tab_text} style={{ color: categoryBytab === 'exotic' ? '#426545' : '#2E363E' }}>
                Экзотические
              </p>
            </div>
            <div className={styles.tab} onClick={() => setCategoryByTab('popular')}>
              <p className={styles.tab_text} style={{ color: categoryBytab === 'popular' ? '#426545' : '#2E363E' }}>
                Популярные
              </p>
            </div>
          </div>
          <div className={styles.cards_container}>
            {plants.map((plant, index) =>
              plant.categories.includes(categoryBytab) ? (
                <CardPlant
                  key={index}
                  id={plant.id}
                  name={plant.name}
                  price={plant.price}
                  discount={plant.discount}
                  imagePubPath={plant.imagePubPath}
                  categories={plant.categories}
                  toCartClick={() => addToCartClick(plant)}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Catalog
