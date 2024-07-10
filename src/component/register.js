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
import miImagen4 from '../../src/assets/img/MindCare.png';

function Register() {

  const datosPsicologoInit = {
    id: 0
  }

  const datosPersonalesInit = {
    id: 0,
    descripcion: "",
    estado: "1",
    validado: "0",
    idDatosPersonales: 0,
    experiencia: null,
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    descripcion: "",
    email: "",
    telefono: "",
    tipoId: "1",
    numeroId: null,
    ciudad: null,
    departamento: null,
    file: "",
    idDatosPersonalesNavigation: datosPsicologoInit,
    psicologoServicios: null,
    psicologoIdiomas: null
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
    descripcion: Yup.mixed().required('required'),
    file: Yup.mixed().required('required'),
    psicologoIdiomas: Yup.mixed().required('required'),
    psicologoServicios: Yup.mixed().required('required'),
    direccion: Yup.mixed().required('required'),
    experiencia: Yup.mixed().required('required'),

  })

  const isPDF = (nombreArchivo) => {
    // Obtener la extensión del archivo
    const extension = nombreArchivo.split('.').pop().toLowerCase();
    // Verificar si la extensión es 'pdf'
    if (extension == 'pdf') {
      return true
    } else {
      return false
    }
  }

  const handleEnviar = (data) => {

    try {

      if (!isPDF(data.file.name)) {

        data.file.value = '';

        Swal.fire({
          title: "Error!",
          text: "Por favor, sube un archivo con extensión .pdf",
          icon: "error"
        });

        return false;
      }

      let idDatosPersonalesNavigation = {
        id: 0,
        nombre: data.nombre,
        apellidos: data.apellidos,
        fechaNacimiento: data.fechaNacimiento,
        email: data.email,
        telefono: data.telefono,
        tipoId: "1",
        numeroId: data.numeroId
      }

      let payload = {
        id: 0,
        file: data.file,
        psicologoIdiomas: data.psicologoIdiomas,
        descripcion: data.descripcion,
        estado: "1",
        validado: "0",
        idDatosPersonales: 0,
        experiencia: data.experiencia,
        idDatosPersonalesNavigation,
        psicologoServicios: data.psicologoServicios,
      }

      RegistrarPsicologo(payload)
        .then(data => {

          if (data.ok) {
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });

          } else {
            if (data.status === 400) {
              data.json().then(function (object) {
                Swal.fire({
                  title: "Error!",
                  text: object.error,
                  icon: "error"
                });
              })
            }

            Swal.fire({
              title: "Error!",
              text: "Error al guardar, porfavor revise nuevamente sus datos!",
              icon: "error"
            });
          }
        })
        .catch(e => {

          Swal.fire('Error', e, 'Error al guardar!');
        });
    } catch (error) {

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

      });
  };

  const handleSelectChange = (event) => {
    // Actualiza el estado con el nuevo valor seleccionado   
    formik.values.departamento = event.target.value

    getMunicipios(event.target.value).then(response => response.json())
      .then(data => {

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
          ({ value: a.id, label: a.nombre })
        );



        setselectServicios(selectServicios)
      })
      .catch(e => {

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
          ({ value: a.id, label: a.nombre })
        );

        setselectIdiomas(Idiomas)
      })
      .catch(e => {

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
          <a className="navbar-brand fw-bold" href="/">
            <img width="130" height="auto" className=" device img-fluid"
              data-device="iPhoneX" data-orientation="portrait" src={miImagen4} /></a>
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
              <h1 className="mb-4 pb-4">Registrar</h1>
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
                    {formik.errors.departamento && formik.touched.departamento && (
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
                      onChange={(value) => {
                        let body = value.map((a, y) =>
                          ({ Id: 0, IdIdioma: a?.value, IdPsicologo: 0, value: a?.value, label: a?.label })
                        );
                        formik.setFieldValue('psicologoIdiomas', body)
                      }
                      }
                      value={formik.values.psicologoIdiomas}
                      isMulti
                      name='psicologoIdiomas'
                      closeMenuOnSelect={false}
                      options={selectIdiomas} />

                    {formik.errors.psicologoIdiomas && formik.touched.psicologoIdiomas && (
                      <div style={{ "color": "red" }}> {formik.errors.psicologoIdiomas} </div>
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
                      type="number"
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
                      onChange={(value, actionMeta) => {
                        let body = value.map((a, y) =>
                          ({ id: 0, idServicio: a?.value, idPsicologo: 0, value: a?.value, label: a?.label })
                        );
                        formik.setFieldValue('psicologoServicios', body)
                      }
                      }
                      value={formik.values.psicologoServicios}
                      isMulti
                      name='idServicio'
                      closeMenuOnSelect={false}
                      options={selectServicios} />
                    {formik.errors.psicologoServicios && formik.touched.psicologoServicios && (
                      <div style={{ "color": "red" }}> {formik.errors?.psicologoServicios} </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label for="formFile" class="form-label">CV</label>

                    <input
                      class="form-control"
                      name="file"
                      onChange={(e) => {
                        formik.setFieldValue('file', e.target.files[0])
                      }
                      }
                      type="file"
                      accept="application/pdf" />

                    {formik.errors.file && formik.touched.file && (
                      <div style={{ "color": "red" }}> {formik.errors?.file} </div>
                    )}
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
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" required="true" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">
                            <p className='text-muted'>

                            Autorizo el uso de mis datos de acuerdo a la Declaración de privacidad y acepto los Términos y condiciones y la <a className="text-reset" href='/autorizacionDatosPersonales' >Autorización de tratamiento de datos.</a>
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
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
