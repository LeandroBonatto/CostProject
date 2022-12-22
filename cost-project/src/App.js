import './App.css';

function App() {
  const name = 'Leo'

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h2>Changing the JSX</h2>
      <p>Hello, {newName}</p>
      <p>Sum: {sum(1, 2)}</p>
    </div>
  );
}

export default App;
