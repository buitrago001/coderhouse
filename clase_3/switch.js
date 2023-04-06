// Calculadora

//variables 

let resultado;
let continuar;
let operacion;

//constante
const suma ="+";
const resta ="-";
const multiplicacion ="*";
const division ="/";

do{

  operacion = prompt(" Ingrese la operacion a realizar - '+ - * / '")
  let number1 = Number( prompt("ingrese el primer numero"));
  let number2 = Number( prompt("Ingrese el segundo numero"));

  switch(operacion){
    case suma:
      resultado = number1+number2;
      break;
    case resta:
      resultado = number1-number2;
      break;
    case multiplicacion:
      resultado = number1*number2;
      break;
    case division:
      resultado = number1/number2;
      break;
    default:
      resultado = NaN;
      console.log("Ingreso un caracter invalido");
  }
  
  console.log("el resultado de la operacion es:" + resultado);
  continuar = prompt("Desea Continuar s/n")

}while (continuar = "s")

