
import { getHeroeById } from "./bases/08-imp-exp";
//1ER EJEMPLO DE PROMESAS
// const promesa = new Promise( (resolve, reject)  => {
//     setTimeout( () => {
//         // aqui el nomre de la variable no importa, en este caso se le llamo heroe
//         //para identificar que sera lo que le envie depues que se ejecute la promesa
//         const heroe = getHeroeById(2); 
//         resolve( heroe );

//         // console.log(heroe);
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     // console.log( 'Then de la promesa' );  
//     console.log('heroe', heroe);
    
// })

const getHerorByIdAsync = ( id ) => {
        return new Promise( (resolve, reject)  => {
            setTimeout( () => {
                // aqui el nomre de la variable no importa, en este caso se le llamo heroe
                //para identificar que sera lo que le envie depues que se ejecute la promesa
                const promesa_heroe = getHeroeById(id); 
                if( promesa_heroe ) {
                    resolve( promesa_heroe );
                }
                else {
                    reject( ' No se puedo econtrar el heroe' );
                }       
                // console.log(heroe);
            }, 2000);
        });
}
//ejecuto la funcion, si es correcta devolvera el heroe con el id pasado por parametro
//sino, arrojara el error.
getHerorByIdAsync(4)
    .then( heroe => console.log ('Heroe', heroe) )
    .catch( error => console.warn ( error ) )