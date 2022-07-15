import imagenesBanner from '../images/Home/1_Baner/imagenesBanner';
import Carousel from "../components/Carousel";

function Inicio() {
  return (
    <>
      <Carousel />
      <div className="mt-10 md:mt-20">
        <h1 className='text-center text-3xl md:text-5xl'>¿Que es <span className='text-violet-600 font-bold'>TIC</span><span className='font-bold text-blue-600'>ONG</span><span className='font-bold text-orange-400'>LE</span>?</h1>
      </div>
      <br />
      <br />
      <br />
      <br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default Inicio;