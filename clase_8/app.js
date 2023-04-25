// los string son objetos  -> array de caracteres
// tiene metodos
// tiene atributos
// -> lenght -> cantidad de carateres que posee el String

const unString = 'esteEsUnString';
console.log(unString.length);

//metodos
//Trim()



//replace()
//me reemplaza un caracter o grupo de carateres por lo que desee

const otherString = unString.replace('a', 'mono') // me reemplaza la primera ocurrencia
console.log(otherString);
// si yo quiero que remplace mas de una 'a' o que reemplace alguan de ellas, o que siga algun patron
// debo usar lo que se denomina expresion regular 'Regexr' - regexr.com


// objeto Math
// es nativo dle lenguaje, simplemente lo utilizamos

// atributos
console.log(Math.PI);



console.log(Math.ceil(3.55)); //4
console.log(Math.floor(3.55));//3
console.log(Math.round(3.55));//4

//haciendo raices cuadradas usando Math

console.log(Math.sqrt(3));
console.log(Math.sqrt(4));
console.log(Math.sqrt(10));

//utilizando valires al azar

console.log(Math.random());

//quiero establecer un rango a mis valores al azar

// ej: quiero que mi numero al azar sea un valor entre 1 y 6 (un dado)

//estableciendo un limite inferor

let valorAzar1 = Math.random()+50;

// estableciendo los limites inferior y superior

let valorAzar = Math.random()*(6-1)+1;
console.log(valorAzar);

// redondeo para que nos devuelva el entero mas cercano

valorAzar = Math.round(valorAzar);
console.log(valorAzar);
