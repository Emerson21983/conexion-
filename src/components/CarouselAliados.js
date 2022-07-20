import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imagenesAliados from '../images/Home/Aliados/imagenesAliados';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function CarouselAliados() {
  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl mt-10 font-semibold">Aliados y socios estratégicos</h1>
      <Carousel swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        customTransition="all .5"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" >
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.SVNet} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.atiempo} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.benowu} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.betterRide} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.casa_tres_mundos} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.casatic} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.clubTIC} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.coexport} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.dreamDigitalWorks} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.eccsa} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.fundemas} />
        </div>
        <div className="h-full flex content-center items-center p-10">
          <img className="w-full" src={imagenesAliados.isocElSalvador} />
        </div>
      </Carousel>;
    </>
  );
}

export default CarouselAliados;

