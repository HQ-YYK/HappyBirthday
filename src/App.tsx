

import { useEffect, useState } from 'react'
import './App.less'

import Dinosaur from './components/dinosaur/index.jsx'
import Typewriter from './components/typewriter/index.jsx'

function App() {
  const [showOne, setShowwOne] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowwOne(false)
    }, 3200)
  }, [])
  return (
    <div className="App h-screen flex fixed w-screen justify-center items-center text-center">
      {/* {
        showOne ? (
          <Dinosaur ></Dinosaur>
        ) : null
      } */}
      <Typewriter></Typewriter>
    </div>
  )
}

export default App
