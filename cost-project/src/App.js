import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const name = 'Leo'

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Changing the JSX</h2>
      <p>Hello, {newName}</p>
      <p>Sum: {sum(1, 2)}</p>
      <img src={url} alt="My picture" />
      <HelloWorld/>
    </div>
  );
}

export default App
