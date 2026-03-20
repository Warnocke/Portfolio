import { useState } from 'react'
import Greeting from './components/Greeting'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Greeting />
      <About />
      <Projects/>
    </>
  )
}

export default App
