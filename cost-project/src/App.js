import { useState } from 'react'
import './App.css'
import YourName from './components/YourName'


function App() {
  const [name, setName] = useState


  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName />
    </div>
  )
}

export default App
