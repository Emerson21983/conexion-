import React, { useState, Fragment } from "react";
import BannerUneteTicongleros from '../images/UneteTicongleros/BannerUneteTicongleros';
import Pag2 from '../images/UneteTicongleros/Pag_2/pag2';

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

                <div class="gap-10 columns-1 md:columns-2 lg:columns-3">
                    <div className="p-5">
                        <div className="rounded-3xl p-5 text-center text-center">
                            <img src={Pag2.formacion_integral} alt="" />
                            <p className="text-teal-900 text-xl">
                                Complementa tu especialización digital con un programa de desarrollo emocional, finanzas básicas e ingles
                            </p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="rounded-3xl p-5 text-center">
                            <img src={Pag2.aprende_creando} alt="" />
                            <p className="text-teal-900 text-xl">
                                Aprendizaje practico trabajando en proyectos reales de empresas y organizaciones socias y aliadas
                            </p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="rounded-3xl p-5 text-center">
                            <img src={Pag2.acceso_laboral} alt="" />
                            <p className="text-teal-900 text-xl">
                                Forma parte de la red de freelancers de <span className="font-bold">TICONGLE</span> para hacer trabajos por proyectos
                            </p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="rounded-3xl p-5 text-center">
                            <img src={Pag2.apoyo_profesional} alt="" />
                            <p className="text-teal-900 text-xl">
                                Aprende y participa en workshops y eventos exclusivos con profesionales y expertos de la industria
                            </p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="rounded-3xl p-5 text-center">
                            <img src={Pag2.emprende_ideas} alt="" />
                            <p className="text-teal-900 text-xl">
                                Transforma tu carrera tanto si quieres trabajar en el mundo digital, como si quieres lanzar tu propia empresa
                            </p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="rounded-3xl p-5 text-center">
                            <img src={Pag2.zona_coworkin} alt="" />
                            <p className="text-teal-900 text-xl">
                                Cuenta con espacios para trabajar en tus propios proyectos y pertenece a la comunidad colaborando e intercambiando conocimientos e ideas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UneteTicongleros;