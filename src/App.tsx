import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Catalog } from '@pages/Catalog'
import { Flower } from '@pages/Flower'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/flower/:id' element={<Flower />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
