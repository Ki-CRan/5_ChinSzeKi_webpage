
import Footer from './Footer';
import maintokyo from "../assets/koyto.jpeg";
import mainseoul from "../assets/Seoul.jpeg";
import mainthailand from "../assets/Thailand.webp";
import mainsingapore from "../assets/Singapore.jpg";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


function Main() {
  return (

    <>

        {/* <Navbar /> */}
        <main className="container-main">


            <p>People travel to explore new cultures, create memories, escape routine, and connect with the world’s diverse wonders.</p>


            <div className="container-grid">

                <div className="img-main img-japan">
                    <Link to="/tokyo"><img src={maintokyo} alt=""/></Link>
                </div>
                <div className="img-main img-seoul">
                    <Link to="/seoul"><img src={mainseoul} alt=""/></Link>
                </div>
                <div className="img-main img-thailand">
                    <Link to="/thailand"><img src={mainthailand} alt=""/></Link>
                </div>
                <div className="img-main img-singapore">
                    <Link to="/singapore"><img src={mainsingapore} alt=""/></Link>
                </div>
                
            </div>

        </main>
        <Footer />

    </>
  )
}

export default Main