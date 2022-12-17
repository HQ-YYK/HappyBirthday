

import { useEffect, useState } from 'react'
import './App.less'

import Dinosaur from './components/dinosaur/index.jsx'
function App() {
  const [showOne, setShowwOne] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowwOne(false)
    }, 3200)
  }, [])
  return (
    <div className="App">
      {
        showOne ? (
          <Dinosaur ></Dinosaur>
        ) : null
      }
    </div>
  )
}

export default App
