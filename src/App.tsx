import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Catalog } from '@pages/Catalog'
import { Flower } from '@pages/Flower'
import { Contacts } from '@pages/Contacts'
import { Login } from '@pages/Login'
import { Registration } from '@pages/Registration'
import { Guarantee } from '@pages/Guarantee'
import { PaymentAndDelivery } from '@pages/PaymentAndDelivery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/flower/:id' element={<Flower />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/guarantee' element={<Guarantee />} />
        <Route path='/payment_and_delivery' element={<PaymentAndDelivery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
