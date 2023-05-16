let valores = [3,2,1,4,6,5,10];



// usamos spread Operator! ->
// vamos a spearar el array y convertirlo en un conjunto de datos

///1 - Nos sirve para Math // Max, Min me piden un conjunto de datos

console.log(Math.max(...valores));
console.log(...valores);
console.log(valores);

//2 concatenar Arrays

const array1 = [1,7,9,"pedro","miguel"];
const array2 = ["miguelito",7,{nombre:MediaStreamAudioSourceNode,edad:25},18];
const array3 = array1.concat(array2);
console.log(array3);

///usandi spread

const arrayConcatenadoSpread = [...array1,"hola", ...array2,];
console.log(arrayConcatenadoSpread);

// copiar Arrays

const copiaArray = [...array1];

// ojo con esto!, esto no es copiar array, recuerden Objetos!!
const copiaArrayMala = array1;

const strock = [new Producto('Arroz', 500), new Producto('Cacao', 250), new Producto(Membrillo, 700)];

const stock2 = [...strock];

strock[0] = new Producto('Dulce de Leche', 600);

console.log(strock);
console.log(stock2);

/// yo quiero ver a los productos de strock y stock2 como un conjunto de valores
console.log(...strock, ...stock2);

//,mostrar mis productos en venta

function muestraProductosEnVenta(producto1, producto2, producto3){
    console.log('Mis productos en venta: '+producto1.nombre, producto2.nombre, producto3.nombre)
}

muestraProductosEnVenta(...strock);


/// 4- Agregar elementos sando spread

strock = [...stock, new Producto('Papas fritas', 240)]; // anaologo al push
console.log(strock);

strock = [new Producto('Batatas', 420), ...strock]; /// analogo al unshift
console.log(strock);

///5 Utilizar el spread como Rest parameters
/// cuando hago que la cantidad de argumentos de una funcion sea inderterminadad

function muestraValores(...valores){
    valores = valores.forEach((valor) => console.log(valor)); /// la funcion recibe un conjunto de valrires per maneja los paramentros
}

muestraValores(2,5,7);
muestraValores(1,25,18,"pepe",7.12);
muestraValores(...strock);

// 6 Spread en objeto

let numerito1 = 5;
let numerito2 = numerito1;

let producto1 = {nombre: 'Sal', precio: 250};

let producto2 = producto1; // no es una copia, producto2 apunta a la misma ubicacion que esta producto1
console.log(...producto1);
/// Aplioco spread sobre objetos

let producto3 = {...producto1};///hice realmente una copia del producto1 // shallow cloning
console.log(producto3);
producto3.precio = 25000000;
console.log(producto1);
console.log(producto3);

/// puedo agregar atributos

let producto4 = {...producto1, marca:'Pepito'};
console.log(producto4);

