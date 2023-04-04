let userName;
let password;

userName = prompt("ingrese su nombre de usuario")
password = prompt ("Ingrese su contrasña")

if(userName != "" && password)
{
    console.log("ingreso datos en el nombre y la contraseña")
}else{
    console.log("Al menos uno de los campos esta vacio")
}

let a = 10;
let b = 2;

if (a /b == 5)
{
 console.log("la division entre A y B es 5")   
}else{
    console.log("la division entre A y B es diferente de 5")
}

if (userName == "" || password ==""){
    alert("No ingreso datos en el usuaior o la contraseña")
}else{
    alert("Datos ingresados correctamente")
}