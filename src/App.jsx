import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Fundo from './components/Fundo'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fundo />
      <Navbar />
      <Home />
    </>
  )
}

export default App
