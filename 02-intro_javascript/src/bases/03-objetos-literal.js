

const persona = {

    nombre: 'Tony',
    Apellido: 'Stark',
    edad: 45,
    direccion: {
        calle: '1724 26 avenue SW',
        telefono: '587-581-6333',
        ciudad: 'Calgary',
        provincia: 'AB',
        pais: 'Canada'
    }

}

console.log(persona);

console.table(persona);

const persona2 = { ...persona};
persona2.nombre = 'Peter';

//Cuando se pone texto delante hay que especificar el campo nombre para que salga la informacion, 
//sino saldra la palabra objeto.
console.log( "Esta es la persona: " + persona.nombre);
console.log( ` Esta es la persona2:  ${ persona2.nombre } `);

//Aqui compruebo que sale el objeto completo con todos sus campos.
console.log(persona2);