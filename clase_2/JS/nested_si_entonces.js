let userName;
let password;

userName = prompt("Ingrese su usuario");
if(userName != "")
{
    password = prompt("Ingrese su contraseña");
    
    if(password != ""){
        console.log("usuarios ingreso Usuario y Contrasña")
    }else{
        console.log("Contraseña esta vacia")
    }
    
}else{
    console.log("Nombre de usuario esta vacio")
}