
import imagenesSedes from '../images/Home/5_Sedes/imagenesSedes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
      <>
        <div className="w-full p-20" style={{ 'backgroundImage': 'url("' + imagenesSedes.fondo_sedes_min + '")', "backgroundAttachment": "fixed" }}>
        <h1 className='text-center text-white text-4xl'>Sedes</h1>
        <div class="gap-12 columns-1 lg:columns-2 mt-10">
          <div className='p-5'>
            <div>
              <center><img src={imagenesSedes.conexion_san_benito_min} alt="" /></center>
              <p className="text-justify">
                <h1 className='mt-10 text-center text-white leading-loose'><span className='p-2 bg-sky-400 rounded'>Dirección</span>&nbsp;&nbsp;Calle La Reforma #249 Col. San Benito, San Salvador.</h1>
              </p>
            </div>
          </div>
          <div className='p-5'>
            <div>
              <center><img src={imagenesSedes.conexion_soyapango_min} alt="" /></center>
              <p className="text-justify">
                <h1 className='mt-10 text-center text-white leading-loose'><span className='p-2 bg-sky-400 rounded'>Dirección</span>&nbsp;&nbsp;Centro Comercial Plaza Venecia, local 109. Carretera de Oro. Frente a U.M. ISSS Soyapango.</h1>
              </p>
            </div>
          </div>
        </div>
        <div className='border border-white'></div>
        <div class="gap-12 columns-1 lg:columns-2 mt-10">
          <div className='p-5'>
            <div>
              <p className="text-justify">
                <h1 className='text-center text-white leading-loose'>Todos los derechos reservados 2022 <span className='font-semibold'>TICONGLE</span><br />Un programa de <span className='font-semibold'>CONEXION El Salvador</span></h1>
              </p>
            </div>
          </div>
          <div className='p-5'>
            <div className='h-full'>
              <div className="flex justify-center items-center h-full text-4xl">
                <a href="https://www.facebook.com/conexion.sv/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-white m-3" />
                </a>
                <a href="https://twitter.com/conexion_sv?lang=es" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-white m-3" />
                </a>
                <a href="https://www.instagram.com/conexion.sv/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-white m-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;
  
  