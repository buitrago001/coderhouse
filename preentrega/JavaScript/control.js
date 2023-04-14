/*
to include
for
while
switch
*/ 

//Variables
let userType;
let user;
let access;
let userAccess;
let inventoryOption;
let product;
let productToInclude;
let end;

let newUser;
let nombre;
let apellido;
let paciente;
let totalProducts;

//Constant
const accessMenu = "Bienvenido, Seleccione  \n\ 1) Login, \n\ 2) Registro";
const userAccessMenu = "Ingrese su Usuario \n\ (usuario: testUsuario o testFuncionario)";

const userTypeMenu = "Seleccione  \n\ 1) Usuario, \n\ 2) Funcionario";
const userSelection = "Seleccione Paciente \n\ 1) Paciente1 \n\ 2) Paciente2 \n\ 3) Paciente3 \n\ 4) Paciente4 ";

const inventoryOptionMenuUser = "Seleccione la accion que desea realizar \n\ 1) Consultar Inventario  \n\ 2) Lista Productos Requeridos \n\ 3) Pre-cargar Invetario"

const inventory = "Los productos disponibles son \n\ medicina1 - 5 \n\ medicina2 - 6 \n\ medicina3  \n\ 2 producto1 - 0 \n\ producto5 - 0 \n\ producto8 - 0 "
const neededProducts = "Los productos que se requeiren son \n\ producto1 \n\ producto5 \n\ producto8"

const inventoryOptionMenuEmployee = "Seleccione la accion que desea realizar \n\ 1) Consultar Inventario  \n\ 2) Lista Productos Requeridos \n\ 3) Pre-cargar Invetario"




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
            while(inventoryOption >0 && inventoryOption <4)
            {
                //switch option to execute
                switch(inventoryOption){
                    case 1:
                        prompt(inventory);

                    break;
                    case 2:
                        prompt(neededProducts);
                    break;
                    case 3:
                        productToInclude =Number(prompt("¿cuantos productos va a ingresar?"));
                        for(let i = 0; i<productToInclude; i++)
                        {
                            let product = (prompt("Ingrese el producto " + i));
                            totalProducts = totalProducts + product;
                            if(i==totalProducts) alert("Productos ingresados "+ totalProducts);
                        }
                    break;
                    case 4:
                        access =0;
                    break;
                }
            }
            
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
