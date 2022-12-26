import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
        <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </Router>
  )
}

export default App
