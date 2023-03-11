import { useState } from 'react'
import './App.css'
import RegisterBtn from './components/buttons/RegisterBtn'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RegisterBtn/>
    </div>
  )
}

export default App
