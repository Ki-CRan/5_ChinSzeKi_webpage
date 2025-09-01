// import React from 'react';
// import Navbar from './Navbar';
import HistoryThailand from './HistoryThailand';
import WeatherThailand from './WeatherThailand'; 
import SightThailand from './SightThailand';
import WebThailand from './ＷebThailand';
import Footer from './Footer';
// import CarouselGalleryThailand from './Carousel Thailand';



function PageThailand() {
  return (
        

    <div className="Thailand">

        {/* <Navbar /> */}
        <HistoryThailand />
        <WeatherThailand />
        <SightThailand />
        {/* <CarouselGalleryThailand /> */}
        <WebThailand />
        <Footer />

    </div>       

  )
}

export default PageThailand