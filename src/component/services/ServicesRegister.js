// import 'dotenv/config'
// require('dotenv').config()
// const baseUrls = process.env.REACT_APP_NOT_SECRET_CODE;
const baseUrls = 'https://localhost:7269/api/';
export const getDepatamentos = ( ) =>{
     
    const url = `${baseUrls}Departamento`;

    return fetch( url );
}

export const getMunicipios = ( idDepartamento) =>{
     
    const url = `${baseUrls}Municipio/departamento/${ idDepartamento }`;
    console.log( baseUrls ) 
    return fetch( url );
}

export const RegistrarPsicologo = ( Psicologo ) =>{
     
    const url =`${baseUrls}Psicologo`;
 
    return fetch(
         url, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: 'POST',
            body:JSON.stringify(Psicologo)  
        });
        
}

export const getServicios = () =>{
     
    const url = `${baseUrls}Servicio`;
    return fetch( url );
}

export const getIdiomas = () =>{
     
    const url = `${baseUrls}idioma`;
    return fetch( url );
}