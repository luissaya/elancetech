import React from 'react'
import Home from './Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Knowledge from './components/Knowledge'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AboutMore from './components/AboutMore'
import Skills from './components/Skills'
import PCBDesign from './components/PCBDesign'
import Cloud from './components/Cloud'
import Firmware from './components/Firmware'
import IOT from './components/IOT'
import MLearning from './components/MLearning'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/knowledge' element={<Knowledge/>}/>
        <Route path='/aboutmore' element={<AboutMore/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/pcbdesign' element={<PCBDesign/>}/>
        <Route path='/cloud' element={<Cloud/>}/>
        <Route path='/firmware' element={<Firmware/>}/>
        <Route path='/iot' element={<IOT/>}/>
        <Route path='/mlearning' element={<MLearning/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App