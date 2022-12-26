import './App.css'
import AnotherList from './components/AnotherList'

function App() {

  const myItens = ['React', 'Vue', 'ANgular']

  return (
    <div className="App">
      <h1>List Rendering</h1>
      <AnotherList itens={myItens} />
      <AnotherList itens={[]} />
    </div>
  )
}

export default App
