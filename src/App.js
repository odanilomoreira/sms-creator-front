import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Header from './Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Login />
      </div>
    </Router>
  );
}

export default App;
