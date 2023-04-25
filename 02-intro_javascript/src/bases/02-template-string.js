

console.log('??? Mundo');

const prueba = "probando";
const nombre =  'Maria';
const apellido = 'Estrella';
console.log( nombre + " " + apellido);

//template string, usando el caracter backstich
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

//con el template string se le puede dar formatos con saltos de lineas.
//Las que se necesiten, es muy flexible
// tamnbien pieden agragrese resultados de calculos o variables de funciones
const nombreCompleto2 = `
${nombre} 
${apellido}
${ 2 + 2}
`
;
console.log(nombreCompleto2);


function getSaludo(){
    return 'Hola Mundo';
}
console.log(` Este es un texto: ${ getSaludo() }` );


//Recordar siempre que cuando se usan los backstichs los espacios en blanco cuentan, como por ejemplo
//los espacios en blanco de la variable nombre.

function getSaludo2(){
    return 'Hola ' + nombre;
}
console.log(` Este es un texto: ${ getSaludo2() }` );
