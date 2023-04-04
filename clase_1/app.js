// Variables
let firstName = "John";
let lastName = "Doe";
let number1 = 3;
let number2 = 5;
let result;
let stringResult;


// Operationes con tipo de datos numerico

//suma
result = number1 + number2;
// multiplicacion
result = number1 * number2;
//division
result = number1 / number2;
//mod o resto
result = number1%2;
result = number2%2;

//Operaciones con Strings

//concatenacion

stringResult = firstName+lastName;
stringResult = "Mariano "+"Lopez";
stringResult = "hola"+1;
stringResult = 8+"Hola";

/* Uso de datos on la informacion que viene del nevegador
*/ muestra de datos

let message = "Hola soy un mensaje";

// mostrar el mensaje en la consola

console.log(message);
console.log ("el numero Pi es "+ Math.PI)

// mostrar mensaje en una ventana de dialogo
alert(message)

//soliticar informacion desde pantalla (prompt siempre asume los datos como String)
let texto1 = prompt("Ingrese Texto");
let texto2 = prompt("Ingreso otro Texto");

/*convertir el valor ingresdo a numero
  parseFloat -> convierte el numero a flotante
  parseInt -> convierte el numero a entero
  number -> conviete el numero al floate o a int
  + -> convierte el string al tipo de datos que corresponda
*/

number1= parseFloat(number1); 
number2 =parseFloat(number2);

number1 = parseInt(number1);
number2 = parseInt(number2);

number1 = Number(number1);
number2 = Number(number2);

number1 = +number1;  
number2 = +number2; 

let textoFinal = texto1 + texto2;
alert(textoFinal);
