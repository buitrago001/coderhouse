// almacenamiento persistente en el navegador

// localStorage
localStorage.setItem('miClavecita', 'soy una clave'); // clave, valor

const itemClave = localStorage.getItem('miClavecita')

console.log(itemClave);

localStorage.setItem('numerito', 3);
const numerito = localStorage.getItem('numerito');
console.log(numerito);

console.log(numerito + 7);


// el storage guarda todos los valooes en formato STRING
//cuando lo obtenemos entonces--- nos devolvera un String
// esto seria un problema si el valor que queremoos almancernar.. no es un string

/// sessionstorage
// tiene los mimsmo metodos y atrubutis que el localStorage
sessionStorage.setItem('token', 'asdasfsdfsd');
const token = sessionStorage.getItem('token')

//si yo cierrei la pestaña o el navegador, esa session se acaba, entinces el storage se borra


// recorrer el storage usando el metodo key (localStorage.key[i])

// eliminiar datos del localStorage
//localStorage.removeItem('numerito');

//localStorage.removeItem('numerito');
//console.log(numerito)// regresa null

// eliminar todos los datos
//localStorage.clear(); // todas las claves seran eliminadas

localStorage.setItem('profile', objetito);
const profile = localStorage.getItem('profile');
console.log(typeof profile);

const array = [2, 4, 6, 25, objetito];

localStorage.setItem('arraycito', array);
const miarrayDesdeLocalStorage = localStorage.getItem ('arraycito');
console.log(miarrayDesdeLocalStorage);

//si solo interpreta strings... como hacmeos??

//JSON -> sting con formato, es decir, reglas sintacticas
// el navegador comprende el string con el formato y sabe que es un JSON
// yo puedo envirle objecots haciedole entender que eso es un objeto JASON

// como guardamos un objeto en formato JSOn

const objectitoJson = ' {"nombre": "Pepe", "edad": 25, "email": "pepe@gmail.com" }' // objeto JSON

localStorage.setItem('producto', JSON.stringify(producto));

// obtenemos el objecto del localStorage
//el objeto esta almacenado en formato JSON
// tengo que convertir JSAON -> Objeto JS

//todo crear clase y objeto(s) producto(s)

const miProducto = JSON.parse(localStorage.getItem('producto'));
console.log(miProducto.nombre);
console.log(miProducto.precio);


// guardando un array en el localSoorage

const producto = [
    producto.push(new Producto('cafe', 80));
    productos.push(new Producto('medialuna', 600));
];

localStorage.setItem('productos', JSON.stringify(productos));

productos = JSON.parse(localStorage.getItem('producto'));