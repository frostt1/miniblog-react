import './App.css';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from "./pages/Home/Home"
import About from './pages/About/About';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/about" element={ <About />}/>
          </Routes>
        </div>   
      </BrowserRouter>
    </div>
  );
}

export default App;
