import { useState } from 'react'

import './App.css'
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChoceRoute from './components/routes/ChoceRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='routes' element={<ChoceRoute/>}></Route>
      </Routes>
    </>
  )
}

export default App
