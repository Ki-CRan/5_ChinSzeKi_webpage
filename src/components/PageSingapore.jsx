
import HistorySingapore from './HistorySingapore';
import WeatherSingapore from './WeatherSingapore'; 
import SightSingapore from './SightSingapore';
import WebSingapore from './ＷebSingapore';
import Footer from './Footer';
// import CarouselGallerySingapore from './Carousel Singapore';


function PageSingapore() {
  return (
        

    <div className="singapore">

        {/* <Navbar /> */}
        <HistorySingapore />
        <WeatherSingapore />
        <SightSingapore />
        {/* <CarouselGallerySingapore /> */}
        <WebSingapore />
        <Footer />


    </div>       

  )
}

export default PageSingapore