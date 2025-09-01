import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (

    <BrowserRouter>
      {/* Real case - add Navbar component and remove ul + li}
      {/* <Navbar /> */}
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add footer */}
        {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App