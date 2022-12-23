import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Person from './components/Person'

function App() {

  const name = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <SayMyName name="Matt"/>
      <SayMyName name="John"/>
      <SayMyName name={name} />
      <Person name="Rod" age="28" carrer="Programmer" pic="https://via.placeholder.com/150" />
    </div>
  )
}

export default App
