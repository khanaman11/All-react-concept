import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Services from './components/Pages/Services'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
