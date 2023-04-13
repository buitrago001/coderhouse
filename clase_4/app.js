/** Tipos de funcion
 * Funcion declarativa
 * funcion expresiva
 */

//funciones
// las funciones en todo lenguaje son intrucciones que van a realizar una accion

// declaracion de una funcion

function sumar(){
    console.log(26+25);
}


// como ysar la funcion?
// llamar o invocar a una funcion

sumar();

// funcion usando parametros

function sumarUsandoParametros(a,b){
    console.log(a + b);
}

// invocar funciones
sumarUsandoParametros(12,13);
sumarUsandoParametros(10,5);
sumarUsandoParametros("pepe", "Pablo");

//ejemplo agregando al carrito un elemento

let total = 0;
let totalconIva = 0;

function agregarItemCarrito(precio){
    return total + precio
}

// calcular el percio total con el iva de la suma de los precions
function calcularIva(total){
    return 1.21*total;    
}

console.log("total al principio" + total);
total = agregarItemCarrito(25.50);
total = agregarItemCarrito(50.00);

totalconIva = calcularIva(total)

//Expresiones de funcion
// se asignan como si fueran una varia

const saludar2 = function(){
    console.log("Hola!!!");
}

saludar2();

/// arrow funtion

const saludar3 = () =>{
    console.log("hola que tal!");
}