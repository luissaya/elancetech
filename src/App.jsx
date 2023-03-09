import React from 'react'
import Home from './Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Knowledge from './components/Knowledge'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AboutMore from './components/AboutMore'
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/knowledge' element={<Knowledge/>}/>
        <Route path='/aboutmore' element={<AboutMore/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App