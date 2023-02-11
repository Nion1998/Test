import logo from './logo.svg';
import './App.css';
import About from './about';
import { Route, Router } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
