import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path='/login'>
            <Header />
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
