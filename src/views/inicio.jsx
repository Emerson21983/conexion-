import imagenesBanner from '../images/Home/1_Baner/imagenesBanner';
import Carousel from "../components/Carousel";

function Inicio() {
  return (
    <>
      <Carousel />
      <div className="mt-10 md:mt-20 mb-10 md:mb-20">
        <h1 className='text-center text-3xl md:text-5xl'>¿Que es <span className='text-violet-600 font-bold'>TIC</span><span className='font-bold text-blue-600'>ONG</span><span className='font-bold text-orange-400'>LE</span>?</h1>
        <h5></h5>
        <div className="flex">
          <div className="w-2/6">
            <div className="flex items-center justify-center">
            <div className="w-9/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end">
                
              </div>
            </div>
            </div>
          </div>
          <div className="w-2/6">

          </div>
          <div className="w-2/6">

          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;