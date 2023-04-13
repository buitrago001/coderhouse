//Variables
let userType;
let user;
let access;
let userAccess;
let inventoryOption;
let product;
let end;

let newUser;
let nombre;
let apellido;
let paciente;

//Constant
const accessMenu = "Bienvenido, Seleccione  \n\ 1) Login, \n\ 2) Registro";
const userAccessMenu = "Ingrese su Usuario \n\ (usuario: testUsuario o testFuncionario)";
const inventoryOptionMenuUser = "Seleccione la accion que desea realizar \n\ 1) Consultar Inventario  \n\ 2) Lista Productos Requeridos \n\ 2) Pre-cargar Invetario"
const inventoryOptionMenuEmployee = "Seleccione la accion que desea realizar \n\ 1) Consultar Inventario  \n\ 2) Lista Productos Requeridos \n\ 2) Pre-cargar Invetario"
const userSelection = "Seleccione Paciente \n\ 1) Paciente1 \n\ 2) Paciente2 \n\ 3) Paciente3 \n\ 4) Paciente4 ";

const userTypeMenu = "Seleccione  \n\ 1) Usuario, \n\ 2) Funcionario";
do
{
    access = Number(prompt(accessMenu));
    console.log(access);
    
    if(access==1){
        userAccess = prompt(userAccessMenu);
        console.log(userAccess);

        if(userAccess == "testUsuario" || userAccess == newUser )
        {
            inventoryOption = Number(prompt(inventoryOptionMenuUser));
            
            //switch option to execute 

            access =0;

        }
        else if(userAccess == "testFuncionario")
        {
            user = Number(prompt(userSelection));
            inventoryOption = Number(inventoryOptionMenuEmployee);
            
            //switch option to execute 
            
            access =0;

        }
     }else if(access ==2)
     {
        nombre = prompt("Ingrese Nombre");
        apellido = prompt ("Ingrese Apellido");
        paciente = Number(prompt(userSelection));
        newUser = prompt("Cree el nombre de usuario para acceder al sistema");
        access = Number(prompt(accessMenu));
     }

}while(access ==1 || access ==2);

alert("Ha terminado el programa, que tenga un buen dia");
