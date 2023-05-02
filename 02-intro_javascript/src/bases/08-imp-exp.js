

import  heroes from '../data/heroes'

// import heroes, { owner } from '../data/heroes';

//console.log(heroes);

export const getHeroeById = (id) => {
    return heroes.find( (heroe => heroe.id === id) );
}
// console.log( getHeroeById(3) );


//otroe ejemplo para filtrar por una condicion, que sea mas de un elemento
// y tambien la funcion flecha esta mas simplificada, se le quiitan las llaves
// y se le quita el return.

export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log( getHeroeByOwner('Marvel'));

