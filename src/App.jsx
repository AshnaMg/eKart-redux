import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import {Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<WishList />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
