import './App.css';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Navbar />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/login" element={ <Login />}/>
                <Route path="/register" element={ <Register />}/>
                <Route path="/about" element={ <About />}/>
          </Routes>
        </div> 
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
