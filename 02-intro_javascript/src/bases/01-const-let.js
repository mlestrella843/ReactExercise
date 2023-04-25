

console.log('Hola Mundo');



const nombre = 'Maria';
const apellido = 'Estrella';

let valor = 5;

console.log(nombre, apellido, valor);

if(true){
    let valor = 6; //Esta variable solo existe en este scope al igual que el console.log de abajo
    console.log(valor);
}

console.log(valor);