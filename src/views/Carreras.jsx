import React, { useState, Fragment } from "react";
import imagenes3 from "../images/Home/3_/imagenes3";

function Carreras() {
  return (
    <>
      <div class="gap-8 columns-1 md:columns-2 lg:columns-3">
        <div className="p-5">
          <div className="rounded-3xl bg-fuchsia-600 p-5">
            <img src={imagenes3.marketing_digital_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-fuchsia-600 p-5">
            <img src={imagenes3.aplicacion_movil_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-fuchsia-600 p-5">
            <img src={imagenes3.analisis_datos_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-fuchsia-600 p-5">
            <img src={imagenes3.creacion_videojuegos_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-sky-800 p-5">
            <img src={imagenes3.desarrollo_web_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-sky-800 p-5">
            <img src={imagenes3.produccion_multimedia_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-sky-800 p-5">
            <img src={imagenes3.cloud_computer_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-sky-800 p-5">
            <img src={imagenes3.Internet_de_las_cosas_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-amber-500 p-5">
            <img src={imagenes3.diseño_grafico_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-amber-500 p-5">
            <img src={imagenes3.soporte_tecnico_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-amber-500 p-5">
            <img src={imagenes3.diseño_ux_ui_min} alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-amber-500 p-5">
            <img src={imagenes3.comercio_electronico_min} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carreras;