import logo from './logo.svg';
import './App.css';
import About from './about';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div >
      
      <BrowserRouter>
       
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
