import React from 'react'
import Header from "./components/Header"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from './components/About'
import {Route, Routes} from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Skills/> 
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home