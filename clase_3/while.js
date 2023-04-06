// calculadora
/* * - * / */
let resultado;
let continuar = "s";
const suma ="+";
const resta ="-";
const multiplicacion ="*";
const division ="/";

while(continuar = "s")
{
    let operacion = prompt(" Ingrese la operacion a realizar - '+ - * / '")
    let number1 = Number( prompt("ingrese el primer numero"));
    let number2 = Number( prompt("Ingrese el segundo numero"));

    if(operacion ==suma){
        resultado = number1+number2;
    } else{
        if(operacion ==resta)
        {
            resultado = number1-number2;
        }
        else{
            if(operacion == multiplicacion)
            {
                resultado = number1*number2;
            }
            else
            if(operacion ==division)
            {
                resultado = number1/number2;
            }
            else{
                resultado = NaN;
                console.log("Ingreso un caracter invalido");
            }
        }
    }
}



