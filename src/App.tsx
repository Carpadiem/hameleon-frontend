import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Catalog } from '@pages/Catalog'
import { Flower } from '@pages/Flower'
import { Contacts } from '@pages/Contacts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/flower/:id' element={<Flower />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
