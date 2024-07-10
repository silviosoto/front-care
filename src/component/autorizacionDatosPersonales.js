import React, { useEffect, useState } from 'react';
import '../css/stylessRegister.css'
 
import miImagen4 from '../../src/assets/img/MindCare.png';

function autorizacionDatosPersonales() {
   
  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          <a className="navbar-brand fw-bold" href="/">
          <img width="130" height="auto" className=" device img-fluid" 
                        data-device="iPhoneX" data-orientation="portrait" src={miImagen4} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">

            </ul>
            <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
              <span className="d-flex align-items-center">
                <i className=" bi-card-text me-2"></i>
                <span className="small">Trabaja con nosotros</span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <header className="masthead .bg-light">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h1 className="mb-4 pb-4 text-center">Autorización para el tratamiento y uso de datos personales.</h1>
              <p style={{textAlign: "justify"}}>
              De conformidad con lo previsto en la Ley 1581 de 2012 “por la cual se dictan las disposiciones generales para la protección de datos personales” y el Decreto 1377 de 2013, que la reglamentan parcialmente, manifiesto que otorgo mi autorización expresa y clara para que el MindCare, pueda hacer tratamiento y uso de mis datos personales, los cuales estarán reportados en la base de datos de la que es responsable dicha organización y que han sido recolectados en las relaciones contractuales que ésta realiza en desarrollo de su objeto social.

De acuerdo a la normatividad citada, el MindCare queda autorizado de manera expresa e inequívoca para mantener y manejar la información suministrada, solo para aquellas finalidades para las que se encuentra facultado y respetando en todo caso, la normatividad vigente sobre protección de datos personales.

No obstante la presente autorización, me reservo el derecho a ejercer en cualquier momento la posibilidad de conocer, actualizar, rectificar y solicitar la supresión de mis datos personales en la base de datos de la organización, cuando así lo estime conveniente.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default autorizacionDatosPersonales;
