
import {useState} from 'react';
import logo from "/src/assets/favicon.ico";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import PageTokyo from "../components/PageTokyo";
import PageSeoul from "../components/PageSeoul";
import PageThailand from "../components/PageThailand";
import PageSingapore from "../components/PageSingapore";
import Main from "../components/Main";
import About from "../components/About";

const Navbar = () => {

    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };

  return (

    <BrowserRouter> 
        <ScrollToTop/>
            <nav className="container-nav">
                <div className="nav-logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="nav-menu">
                    <ul>
                        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                        <li><Link to="/tokyo">tokyo</Link></li>
                        <li><Link to="/seoul">south korea</Link></li>
                        <li><Link to="/thailand">thailand</Link></li>
                        <li><Link to="/singapore">singapore</Link></li>
                        <li><Link to="/about">about</Link></li>
                    </ul>
                </div>


                <div className="nav-burger">
                    <div className="mobile-menu-toggle" onClick={handleToggle}> 
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>
                </div>

                <div className={
                    isToggle ? "mobile-list active":"mobile-list"
                } >
                    <ul>
                                    <li><Link to="/" onClick={handleToggle}>Home</Link></li>
                                    <li><Link to="/tokyo" onClick={handleToggle}>tokyo</Link></li>
                                    <li><Link to="/seoul" onClick={handleToggle}>south korea</Link></li>
                                    <li><Link to="/thailand" onClick={handleToggle}>thailand</Link></li>
                                    <li><Link to="/singapore" onClick={handleToggle}>singapore</Link></li>
                                    <li><Link to="/about" onClick={handleToggle}>about</Link></li>
                    </ul>
                </div>

            </nav>

        <Routes>

            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/tokyo" element={<PageTokyo />} />
            <Route path="/seoul" element={<PageSeoul />} />
            <Route path="/thailand" element={<PageThailand />} />
            <Route path="/singapore" element={<PageSingapore />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Add footer */}
            {/* <Footer /> */}
        </Routes>



    </BrowserRouter> 
  )
}

export default Navbar;