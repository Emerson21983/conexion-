import React, { useState, Fragment } from "react";
import BannerUneteTicongleros from '../images/UneteTicongleros/BannerUneteTicongleros';

function UneteTicongleros() {
    return (
        <>
            <div className="w-full text-center relative flex" style={{ 'backgroundImage': 'url("' + BannerUneteTicongleros.Preparate + '")', "backgroundRepeat": "no-repeat", "backgroundSize": "100%" }}>
                <img src={BannerUneteTicongleros.Preparate} className="invisible" />
                <div className="absolute bottom-3 sm:bottom-5 md:bottom-10 lg:bottom-14 m-auto right-0 left-0">
                    <a href="#" className="p-2 sm:p-3 lg:p-5 rounded-md bg-amber-300 text-white text-sm sm:text-2xl lg:text-3xl font-semibold">Aplicar</a>
                </div>
            </div>
            <div className="w-full bg-slate-300 p-10">
                <h1 className="text-center text-4xl font-medium">¿Porque debería unirme a <span className='text-violet-600 font-bold'>TIC</span><span className='font-bold text-blue-600'>ONG</span><span className='font-bold text-orange-400'>LE</span>?</h1>

                <h1 className="text-center text-4xl mt-10">Tu portafolio es tu mejor currículo</h1>

                <div class="gap-8 columns-1 md:columns-2 lg:columns-3">
                    <div className="p-5">
                        <div className="rounded-3xl p-5">
                            <img src={imagenes3.marketing_digital_min} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UneteTicongleros;