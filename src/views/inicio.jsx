import imagenesBanner from '../images/Home/1_Baner/imagenesBanner';
import Imagenes2 from '../images/Home/2_/imagenes2';
import Imagenes3 from '../images/Home/3_/imagenes3';
import Carousel from "../components/Carousel";
import imagenes2 from '../images/Home/2_/imagenes2';
import imagenes3 from '../images/Home/3_/imagenes3';
import imagenesBootcamp from '../images/Home/4_Bootcamp/imagenesBootcamp';
import Carreras from '../views/Carreras';
import Carousel2 from '../components/CarouselAliados';

function Inicio() {
  return (
    <>
      <Carousel />
      <div className="mt-10 md:mt-20 mb-10 md:mb-20">
        <h1 className='text-center text-3xl md:text-5xl'>¿Que es <span className='text-violet-600 font-bold'>TIC</span><span className='font-bold text-blue-600'>ONG</span><span className='font-bold text-orange-400'>LE</span>?</h1>
        <div className='w-full flex justify-center items-center'>
          <div className='w-3/4 text-justify mt-5'>Es un programa integral para que los jóvenes en situación de vulnerabilidad educativa-laboral cuenten con oportunidades para mejorar sus condiciones socioeconómicas a traves de la <span className='font-bold'>formación, el empleo y emprendimiento</span></div>
        </div>
        <div className="lg:flex mt-10">
          <div className="w-full lg:w-2/6 mt-5">
            <div className="flex items-center justify-center h-full">
              <div className="w-9/12 bg-fuchsia-600 rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                <h1 className='text-center m-10 font text-3xl md:text-4xl font-semibold text-white'>Joven Integral</h1>
                <center><img className='w-1/2' src={imagenes2.joven_integral2_min} alt="" /></center>
                <div className="w-full p-10 text-white">
                  <p>Con planes de formación prácticos y con la metodología de "aprender - haciendo", abarcamos 4 areas: formación técnica, desarrollo emocional a traves de un programa neurolingüistico, ingles y el ABC de las finanzas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6 mt-5">
            <div className="flex items-center justify-center h-full">
              <div className="w-9/12 bg-sky-800 rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                <h1 className='text-center m-10 font text-3xl md:text-4xl font-semibold text-white'>Joven Productivo</h1>
                <center><img className='w-1/2' src={imagenes2.joven_productivo_min} alt="" /></center>
                <div className="w-full p-10 text-white">
                  <p>Promoviendo el empleo independiente o freelance, damos el impulso que los jóvenes necesitan para hacer un trabajo por proyecto o tareas especificas, poniendo a la disposición del mercado sus servicios y gestionando la labor con los socios y aliados.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6 mt-5">
            <div className="flex items-center justify-center h-full">
              <div className="w-9/12 bg-amber-500 rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                <h1 className='text-center m-10 font text-3xl md:text-4xl font-semibold text-white'>Joven Emprendedor</h1>
                <center><img className='w-1/2' src={imagenes2.emprendedor_min} alt="" /></center>
                <div className="w-full p-10 text-white">
                  <p>Con la experiencia adquirida el joven emprenderá con su propio negocio, brindándole asistencia administrativa y financiera, espacios de coworking, gestión de alianzas para hacer negocios y otros servicios que le ayudan a formalizarse y crecer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-sky-200 p-10">
        <h1 className='text-center text-3xl md:text-5xl mb-10'>Conocemos tu <span className='text-violet-600 font-bold'>Len</span><span className='font-bold text-blue-600'>gua</span><span className='font-bold text-orange-400'>je</span></h1>
        <div className="w-full flex justify-center items-center mb-10">
          <div className="flex justify-center items-center p-5 lg:p-10 bg-white w-full md:w-1/2 rounded-lg">
            <iframe className='rounded-md w-full' width="560" height="315" src="https://www.youtube.com/embed/QC4jNXstf98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center mb-5">
          <div className='rounded-3xl bg-sky-800 p-3 lg:p-10 w-full lg:w-9/12'>
            <h1 className='text-white text-2xl md:text-3xl text-justify'>Ayudamos a las organizaciones y empresas a potenciar su trabajo aprovechando las tecnologías digitales</h1>
          </div>
        </div>
      </div>
      <div className="w-full p-10 text-center" style={{ 'backgroundImage': 'url("' + imagenes3.Fondo_min + '")', "backgroundSize": "100%" }}>
        <div className='flex items-center justify-center'>
          <h1 className='text-center text-2xl md:text-3xl mb-10 w-full md:w-9/12'>Con <span className='text-violet-600 font-bold'>TIC</span><span className='font-bold text-blue-600'>ONG</span><span className='font-bold text-orange-400'>LE</span> nos preparamos recibiendo cursos, certificaciones y talleres prácticos con profesionales y expertos en las areas de demanda digital.</h1>
        </div>
        <Carreras />
        <div className="flex justify-center items-center mb-5 mt-5">
          <div className='rounded-3xl bg-sky-800 p-3 lg:p-10 w-full lg:w-9/12'>
            <h1 className='text-white text-2xl md:text-3xl text-justify'>Ayudamos a las organizaciones y empresas a potenciar su trabajo aprovechando las tecnologías digitales</h1>
          </div>
        </div>
      </div>
      <div className="w-full p-20 text-center" style={{ 'backgroundImage': 'url("' + imagenesBootcamp.fondo_bootcamp_min + '")', "backgroundSize": "100%" }}>
        <div class="gap-12 columns-1 lg:columns-2">
          <center><img src={imagenesBootcamp.L_Bootcamp_min} alt="" /></center>
          <div className=''>
            <div>
              <h1 className='text-white text-2xl md:text-4xl'>Participa en nuestros Bootcamp</h1>
              <br /><br />
              <a href="#" className='p-3 md:p-5 bg-fuchsia-600 text-white rounded-xl font-bold text-xl lg:text-3xl'>Aplica ya</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5">
        <Carousel2 />
      </div>
    </>
  );
}

export default Inicio;