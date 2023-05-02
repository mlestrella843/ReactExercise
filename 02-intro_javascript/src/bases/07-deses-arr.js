import React, {useState, useEffect} from "react";


const personajes  = ['Maria', 'Jose', 'Gatubela'];

const personaje1 = personajes;

//usando la destructuracion de arreglos, capto el personaje en la posicion 1 del arreglo, asignandole el nomre
//de variable personaje2.
const [  , personaje2,  ] = personajes;
//Aqui capto el personaje en la posicion 2 del arreglo, asignandole el nombre de variable personaje3.
const [  ,  , personaje3 ] = personajes;

console.log(personaje1);
console.log(personaje2);
console.log(personaje3);


const returnPersonaje = () =>{
    return ['ABC', 345];
}
//Esta es la forma tradicional de sacar por consola una funcion de flecha
console.log(returnPersonaje());

// para desestructurar este arreglo puedo hacer esto
const [ letras, numeros ] = returnPersonaje(); 

//Aqui se comprueba que lo que da el valor es lo que retorna la funcion returPersonaje()
// y le puedo desestructurar con los nombres de variables que yo necesite.
const [ maria, estrella ] = returnPersonaje();

console.log( letras, numeros );
console.log( maria, estrella );

const usestate = ( valor ) => {
    return [ valor, ()=> { console.log('Hola Mundo') } ];
}

const arr = usestate( 'Goku' );
console.log (arr);
arr[1]();

//Tarea, es similra a lo que esta encima. 
// Usando la desestructuracion, asi se usara en el futuro el useState y los demas Hooks.
// aqui se le asigna a la variable nomre el valor de 'Goku
// aqui se le asigna a la variable setNombre lo que trae la funcion de useState
// al final se saca la variable nomre por consola;
// luego se ejecuta 
const [ nombre, setNombre] = usestate('Goku');
console.log (nombre);
setNombre();

