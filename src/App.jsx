import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import MainContent from './component/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
       
    </>
  )
}

export default App
