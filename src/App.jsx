import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardStack from './Components/CardStack'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </BrowserRouter>
    </>
  )
}

export default App
