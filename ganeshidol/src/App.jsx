import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='hero' element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='Products' element={<Products />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App