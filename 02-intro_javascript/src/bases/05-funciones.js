
// funciones mas convencionales, pero que son mas fuertes y que no permite que se alteren facilmente.
//Estos son recomendables usarles, tambien.
const saludar = function(nombre){
    return `Hola, ${ nombre } `;
}

//Funciones flechas
const saludar2 = (nombre) =>{
    return `Hola, ${ nombre } `;
}

//Funciones fleqchas simplificadas cuando solo tienen una linea de codigo
const saludar3 = (nombre) => `Hola, ${ nombre}`;

//Funaciones flechas sin parametros y una sola linea de codigo
const saludar4 = () => `Hola Mundo`;

// Funcion fleja que retorna un objeto

const getUser = () => ({
    uid: '430843',
    username: 'mestrella'
})


console.log( saludar('Maria') );
console.log( saludar2('Juan') );
console.log( saludar3('Rafael') );
console.log( saludar4() );

const user = getUser();
console.log( user );


//Tarea
//1. transformarse en una funcion flecha.
//2. Tiene que retornar un objeto implicito
//3. Pruebas
function getUsuarioActivo(nombre){
    return{
        uid:'45-8967',
        username: 'rfernandez'
    }
};
const usuarioActivo = getUsuarioActivo('Fernandino');
console.log(usuarioActivo);

//1 y 2. //se elimino la palabra funcion, se despego el parametro de la funcion
//y luego se encerro en parentesis luego de llaves para convertirlo en un objeto
//implicito
const tomarUsuario = (nombre) => ( 
    {
    uid:'45-8967',
    username: 'JosefinaAlvarez'
    }
);
console.log( tomarUsuario('Josefina') );

