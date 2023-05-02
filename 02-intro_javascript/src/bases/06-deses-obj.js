
//import React, { createContext } from 'react';


const persona = {
    nombre : 'Tony',
    edad: 45,
    clave:'Ironman',
    rango: 'Soldado'
};
const { nombre, edad, clave } = persona;
console.log( nombre, edad, clave );

//funcion que retorne nombre de persons

const returnPersona = ({ nombre, edad }) => {
   console.log(nombre, edad);
}
returnPersona(persona);

// se puede anadir otra propiedad en la linea de desustructuracion asignandole un valoe
//aunque no este definido previamente en el objeto.

const returnPersona2 = ({ nombre, edad, rango = 'Coronel' }) => {
    console.log(nombre, edad, rango);
 }
 returnPersona2(persona);

// pero si estuviese definido en el objeto el valor que tomaria primero siempre sera
//el valor que tenga en el objeto

// Otra forma de usar la desestructiracion

const usecontext = ({ clave, nombre, edad, rango = 'Coronel' }) => {
    
   return {
        nombreClave: clave,
        anios: edad,
        ltlng:{ 
            lat: 14.23,
            lng: 34.78
        }
   }
 }
 
 const { nombreClave, anios, ltlng:{ lat, lng } }  = usecontext( persona );

 console.log( nombreClave, anios);
 console.log( lat, lng);