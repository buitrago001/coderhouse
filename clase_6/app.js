// arrays
const listaVacia = []; // array vacio
const listaLlena = ['nombre', 'apellido', 'edad', 'otros'];

console.log(listaVacia);
console.log(listaLlena);


//lenght

// push

// unshift

//shift

//pop

//splice

//join

//concat
// combina 2 arrays (union)

const hombres = ['juan', 'pedro', 'tomas'];
const mujeres = [' marta', 'rosario', 'maria'];
const salarios = [1,2,3];

const lista = hombres.concat(mujeres, salarios);
console.log(lista);

// slice
// genera una porcion del array desde donde hasta donde
// miarray.slide (desdeDonde, hastaDonde);

console.log(hombres.slice(0,2));

//IndexOf
let indice = lista.indexOf('rosario');
console.log(indice);


// includes

//reverse

let backward = lista.reverse();
console.log(backward);

// array de objetos

const pokemoncito = [{nombre: 'charizar', tipo: 'fuego'}, {nombre: 'pikachu', tipo: 'electrico'}]

