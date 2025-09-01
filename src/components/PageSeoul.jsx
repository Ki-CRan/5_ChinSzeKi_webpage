import React from 'react';
import Navbar from './Navbar';
import HistorySeoul from './HistorySeoul';
import WeatherSeoul from './WeatherSeoul'; 
import SightSeoul from './SightSeoul';
import WebSeoul from './ＷebSeoul';
import Footer from './Footer';
// import CarouselGallerySeoul from './Carousel Seoul';




function PageSeoul() {
  return (
        

    <div className="seoul">

        {/* <Navbar /> */}
        <HistorySeoul />
        <WeatherSeoul />
        <SightSeoul />
        {/* <CarouselGallerySeoul /> */}
        <WebSeoul />
        <Footer /> 


    </div>       

  )
}

export default PageSeoul