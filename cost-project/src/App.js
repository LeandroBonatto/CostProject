import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {

  const name = "Maria"

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name="Matt"/>
      <SayMyName name="John"/>
      <SayMyName name={name} />
    </div>
  );
}

export default App
