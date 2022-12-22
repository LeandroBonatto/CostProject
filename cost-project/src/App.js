import './App.css';

function App() {
  const name = 'Leo'

  const newName = name.toUpperCase()

  return (
    <div className="App">
      <h2>Changing the JSX</h2>
      <p>Hello, {newName}</p>
      <p>Sum: {2 + 2}</p>
    </div>
  );
}

export default App;
