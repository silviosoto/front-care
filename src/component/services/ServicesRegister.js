// import 'dotenv/config'
// require('dotenv').config()
// const baseUrls = process.env.REACT_APP_NOT_SECRET_CODE;
const baseUrls = 'https://mindcarebacks.azurewebsites.net/api/';
export const getDepatamentos = () => {

    const url = `${baseUrls}Departamento`;

    return fetch(url);
}

export const getMunicipios = (idDepartamento) => {

    const url = `${baseUrls}Municipio/departamento/${idDepartamento}`;
    console.log(baseUrls)
    return fetch(url);
}

export const RegistrarPsicologo = (Psicologo) => {

    const url = `${baseUrls}Psicologo`;

    const formData = new FormData();

    for (const name in Psicologo) {

        if (name == "psicologoIdiomas" || name == "idDatosPersonalesNavigation" || name == "psicologoServicios") {
            let psicologoIdiomas = Psicologo[name]
            formData.append(name, JSON.stringify(psicologoIdiomas));
        } else {
            formData.append(name, Psicologo[name]);
        }
    }

    return fetch(
        url,
        {
            method: 'POST',
            body: formData
        });

}

export const getServicios = () => {

    const url = `${baseUrls}Servicio`;
    return fetch(url);
}

export const getIdiomas = () => {

    const url = `${baseUrls}idioma`;
    return fetch(url);
}