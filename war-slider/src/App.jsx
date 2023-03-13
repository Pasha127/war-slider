import { useState } from 'react'
import './lib/sass/App.scss'
import CountrySelector from './components/countrySelector/CountrySelector'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CountrySelector/>
    </div>
  )
}

export default App
