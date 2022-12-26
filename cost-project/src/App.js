import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'

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
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </switch>
    </Router>
  )
}

export default App
