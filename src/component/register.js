import React, { useEffect, useState } from 'react';
import '../css/stylessRegister.css'
import * as Yup from "yup"
import Swal from 'sweetalert2'
import { Formik, useFormik } from 'formik';
import Select from 'react-select'

import {
  getDepatamentos, getMunicipios, RegistrarPsicologo,
  getServicios,
  getIdiomas
} from '../component/services/ServicesRegister';


function Register() {
  
  const datosPsicologoInit = {
    id: 0,

  }


  // const psicologoIdioma = [
  //   {
  //     id: 0,
  //     idIdioma: 0,
  //     idPsicologo: 0
  //   }
  // ]

  const psicologoServicios = [
 
  ]

  const datosPersonalesInit = {
    id: 0,
    descripcion: "",
    estado: "1",
    validado: "0",
    idDatosPersonales: 0,
    experiencia: 0,
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    descripcion:"",
    email: "",
    telefono: "",
    tipoId: "1",
    numeroId: 0,
    ciudad: 0,
    departamento: 0,
    idDatosPersonalesNavigation: datosPsicologoInit,
    psicologoServicios:{},
    psicologoIdiomas:{}
  } 

  const [selectDepartamentos, setSelectDepartamentos] = useState([]);
  const [selectServicios, setselectServicios] = useState([]);
  const [selectIdiomas, setselectIdiomas] = useState([]);
  const [selectMunicipios, setSelectMunicipios] = useState([]);

  const validationRules = Yup.object().shape({
    nombre: Yup.mixed().required('required'),
    apellidos: Yup.mixed().required('required'),
    fechaNacimiento: Yup.date().required('required'),
    email: Yup.string().email().required('required'),
    telefono: Yup.number().required('required'),
    numeroId: Yup.number().required('required'),
    ciudad: Yup.number().required('required'),
    departamento: Yup.number().required('required'),
    descripcion: Yup.mixed().required('required')
  })

  const handleEnviar = (data) => {
    try {
      console.log("data", data, data.psicologoIdioma)
      // data.idDatosPersonalesNavigation.descripcion = data.descripcion;
      let idDatosPersonalesNavigation = {
        id: 0,
        nombre: data.nombre,
        apellidos: data.apellidos,
        fechaNacimiento: data.fechaNacimiento,
        email: data.email,
        telefono:  data.telefono,
        tipoId: "1",
        numeroId: data.numeroId
      }
  
      let payload = {
        id: 0,
        psicologoIdiomas: data.psicologoIdiomas,
        descripcion: data.descripcion,
        estado: "1",
        validado: "0",
        idDatosPersonales: 0,
        experiencia: data.experiencia,
        idDatosPersonalesNavigation,
        psicologoServicios: data.psicologoServicios,
      }
  
      // delete data.descripcion
      RegistrarPsicologo(payload)
        .then(data => {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        })
        .catch(e => {
          console.log("error: handleEnviar ", e);
          Swal.fire('Error', e, 'Error al ggrabar los datos');
        });
    } catch (error) {
        console.log("handleEnviar", error )
    }
   
  };

  const formik = useFormik({
    initialValues: datosPersonalesInit,
    validationSchema: validationRules,
    onSubmit: handleEnviar
  })

 


  const GetDepartamentos = () => {

    getDepatamentos().then(response => response.json())
      .then(data => {

        let departamentos = [];
        if (data != undefined) {
          departamentos = data;
        }

        let selectDepartamentos = departamentos.map((a, y) =>
          <option key={y} value={a.id}>{a.nombre}</option>
        );

        setSelectDepartamentos(selectDepartamentos)
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSelectChange = (event) => {
    // Actualiza el estado con el nuevo valor seleccionado   
    formik.values.departamento = event.target.value

    getMunicipios(event.target.value).then(response => response.json())
      .then(data => {
        console.log(data);
        let municipios = [];
        if (data != undefined) {
          municipios = data;
        }

        let selectMunicipios = municipios.map((a, y) =>
          <option key={y} value={a.id}>{a.nombre}</option>
        );

        setSelectMunicipios(selectMunicipios)

      })
      .catch(e => {
        console.log(e);
      });
  };

  const GetServiciosPsicologo = () => {

    getServicios().then(response => response.json())
      .then(data => {

        let servicios = [];
        if (data != undefined) {
          servicios = data;
        }

        let selectServicios = servicios.map((a, y) =>
          ( { value:a.id, label: a.nombre })
        );
        
        console.log("selectServicios", selectServicios);
        
        setselectServicios(selectServicios)
      })
      .catch(e => {
        console.log(e);
      });
  };

  const GetIdiomasPsicologo = () => {

    getIdiomas().then(response => response.json())
      .then(data => {

        let servicios = [];
        if (data != undefined) {
          servicios = data;
        }

        let Idiomas = servicios.map((a, y) =>
          ( { value:a.id, label: a.nombre })
        );

        setselectIdiomas(Idiomas)
      })
      .catch(e => {
        console.log(e);
      });
  };
  

  useEffect(() => {
    GetDepartamentos();
    GetIdiomasPsicologo();
    GetServiciosPsicologo();
  }, []);

  return (


    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          <a className="navbar-brand fw-bold" href="/">MindCare</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">

            </ul>
            <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
              <span className="d-flex align-items-center">
                <i className="bi-chat-text-fill me-2"></i>
                <span className="small">Trabaja con nosotros</span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <header className="masthead .bg-light">

        <div className="container   rounded border border-dark-subtle p-2 mb-2 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h1 className="mb-3">Registrar</h1>
              <form onSubmit={formik.handleSubmit} >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formik.values.nombre}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.nombre && (
                      <div style={{ "color": "red" }}> {formik.errors.nombre} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      name='apellidos'
                      value={formik.values.apellidos}
                      onChange={formik.handleChange}
                      id="apellidos"
                      className="form-control"
                      defaultValue=""
                    />
                    {formik.errors.apellidos && formik.touched.apellidos && (
                      <div style={{ "color": "red" }}> {formik.errors?.apellidos} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Fecha de nacimiento
                    </label>
                    <input
                      type="date"
                      name='fechaNacimiento'
                      className="form-control"
                      value={formik.values.fechaNacimiento}
                      onChange={formik.handleChange}
                      id="fechaNacimiento"
                    />
                    {formik.errors.fechaNacimiento && formik.touched.fechaNacimiento && (
                      <div style={{ "color": "red" }}> {formik.errors.fechaNacimiento} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <div style={{ "color": "red" }}> {formik.errors.email} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Teléfono
                    </label>
                    <input
                      type="text"
                      name="telefono"
                      id="telefono"
                      value={formik.values.telefono}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.telefono && formik.touched.telefono && (
                      <div style={{ "color": "red" }}> {formik.errors.telefono} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Identificación
                    </label>
                    <input
                      type="text"
                      name="numeroId"
                      value={formik.values.numeroId}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.numeroId && formik.touched.numeroId && (
                      <div style={{ "color": "red" }}> {formik.errors.numeroId} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Direccion
                    </label>
                    <input
                      type="text"
                      name="direccion"
                      value={formik.values.direccion}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.direccion && formik.touched.direccion && (
                      <div style={{ "color": "red" }}> {formik.errors?.direccion} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Departamento
                    </label>
                    <select
                      name="departamento"
                      value={formik.values.departamento}
                      onChange={handleSelectChange}
                      className="form-control"
                      data-style="btn btn-primary " title="Single Select" >
                      <option value={0}>SELECCIONE UNA OPCION</option>
                      {selectDepartamentos}
                    </select>
                    {formik.errors.departamento && formik.touched.departamento(
                      <div style={{ "color": "red" }}> {formik.errors.departamento} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Ciudad
                    </label>
                    <select
                      name="ciudad"
                      value={formik.values.ciudad}
                      onChange={formik.handleChange}
                      className="form-control"
                      data-style="btn btn-primary " title="Single Select" >
                      <option value={0}>SELECCIONE UNA OPCION</option>
                      {selectMunicipios}
                    </select>
                    {formik.errors.ciudad && formik.touched.ciudad && (
                      <div style={{ "color": "red" }}> {formik.errors.ciudad} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Idiomas
                    </label>
                    <Select 
                      onChange={(value) => 
                      {
                        let body = value.map((a, y) => 
                          ({id:0, idIdioma: a?.value, idPsicologo: 0  })
                        );
                        formik.setFieldValue('psicologoIdiomas',body)
                      } 
                      } 
                      value={formik.values.idDatosPersonalesNavigation["psicologoIdiomas"]}
                      isMulti
                      name='psicologoIdiomas'
                      closeMenuOnSelect={false}
                      options={selectIdiomas} />   

                    {formik.errors.idIdioma && formik.touched.idIdioma && (
                      <div style={{ "color": "red" }}> {formik.errors.idIdioma} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Años de Experiencia
                    </label>
                    <input
                      type="text"
                      name="experiencia"
                      value={formik.values.experiencia}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.experiencia && formik.touched.experiencia && (
                      <div style={{ "color": "red" }}> {formik.errors?.experiencia} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Servicios
                    </label>
                    <Select 
                      onChange={(value, actionMeta) => 
                      {
                        let body = value.map((a, y) => 
                          ({id:0, idServicio: a?.value, idPsicologo: 0  })
                        );
                        formik.setFieldValue('psicologoServicios',body)
                      } 
                      } 
                      value={formik.values.idDatosPersonalesNavigation["psicologoServicios"]}
                      isMulti
                      name='idServicio'
                      closeMenuOnSelect={false}
                      options={selectServicios} />           
                  </div>

                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="grid-password"
                    >
                      Acerca de mi
                    </label>
                    <textarea
                      name="descripcion"
                      value={formik.values.descripcion}
                      onChange={formik.handleChange}
                      className="form-control"
                      rows="4"
                    ></textarea>
                    {formik.errors.descripcion && formik.touched.descripcion && (
                      <div style={{ "color": "red" }}> {formik.errors.descripcion} </div>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-dark w-100 fw-bold" >Enviar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </header>



    </div>
  );
}

export default Register;
