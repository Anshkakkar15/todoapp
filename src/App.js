import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components//Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar title="Notes" />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
