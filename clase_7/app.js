// funciones de alto orden u orden superior

function Dios (nombre){
    return function (){
        console.log(nombre + ' esta volando! es un milagro!');
    } ///capacidad de hacer una accion (en este caso es volar)
}

const miMilago = Dios('Andres');
miMilago();
miMilago();

const miArray = [2, 3.6, 8, 9];
let total;

function porCadaUno(array, accion)
{
    for(const elemento of array){
        accion(elemento);
    }
}

function sumar(valor){
    total = total+valor;
}

porCadaUno(miArray,sumar);
console.log(total);


//metodos de arrays avanzados

const otroArray = [ 1, 2 ,3]

// forEach (es igual al porCadaUno)


//find - retortna el primer elemento

// filter - retorna un array de elementos de elementos buscados

// some - 

// map - metodo de transformacion 

// reduce

// sort 

