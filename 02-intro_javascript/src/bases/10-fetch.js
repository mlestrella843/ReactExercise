
const api_key='64HSIVwrkXnXpezMmdswg1wgm84FSewF';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);

peticion
// las promesas pueden encadenarse, por lo que sus respuestas se pueden ir desglosando
// usando distintos then secuencialmente.
    .then( resp => resp.json() )
    .then( ({ data }) => {
        // console.log(data.images.original.url)
        //usando la destructuracion puedo obtener la ruta de la url 
        const { url } = data.images.original;
        // console.log(url);

        //creo imagen en memoria
        const img = document.createElement('img');
        //le agrego la url/api a la imagen creada en memoiria
        img.src = url;

        //inserto el gift que me trae la url en la imagen, y luego esta la pongo en el document del html
        document.body.append(img);


    })
    .catch(console.warn);

