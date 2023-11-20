import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.scss';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
