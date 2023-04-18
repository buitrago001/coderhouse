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
let totalProducts;
let productToInclude;
let end;

let newUser;
let nombre;
let apellido;
let paciente;


//Constant - menus
const accessMenu = "Bienvenido, Seleccione  \n\ 1) Login \n\ 2) Registrarse";
const userAccessMenu = "Ingrese su Usuario \n\ (usuario: testUsuario)";

const userTypeMenu = "Seleccione  \n\ 1) Usuario, \n\ 2) Funcionario";
const userSelection = "Seleccione Paciente \n\ 1) Paciente1 \n\ 2) Paciente2 \n\ 3) Paciente3 \n\ 4) Paciente4 ";

const inventoryOptionMenuUser = "Seleccione la accion que desea realizar \n\ 1) Consultar Inventario  \n\ 2) Lista Productos Requeridos \n\ 3) Pre-cargar Invetario"

const inventory = "Los productos disponibles son \n\ medicina1 - 5 \n\ medicina2 - 6 \n\ medicina3  -2 \n\ producto1 - 0 \n\ producto5 - 0 \n\ producto8 - 0 "
const neededProducts = "Los productos que se requeiren son \n\ producto1 \n\ producto5 \n\ producto8"

const inventoryOptionMenuEmployee = "Seleccione la accion que desea realizar \n\ 1) Consultar Inventario  \n\ 2) Lista Productos Requeridos \n\ 3) Pre-cargar Invetario"




do
{
    access = Number(prompt(accessMenu));
    console.log(access);
    
    if(access==1)
    {
        userAccess = prompt(userAccessMenu);
        console.log(userAccess);

        if(userAccess == "testUsuario" || userAccess == newUser )
        {
            inventoryOption = Number(prompt(inventoryOptionMenuUser));
            while(inventoryOption >0 && inventoryOption <4)
            {
                switch(inventoryOption){
                    
                    case 1: //consultar inventario
                    
                        inventoryOption = Number( prompt(inventory + " \n\ Que desea hacer a continuacion: \n\ 1) Lista Productos Requeridos \n\ 2) Pre-cargar Invetario \n\ 0) salir"));
                        console.log(inventoryOption);
                        if(inventoryOption == 1) inventoryOption =2;
                        else if(inventoryOption ==2) inventoryOption =3;
                        else if(inventoryOption != 1 || inventoryOption !=2) inventoryOption=0;
                        
                    break; 

                    case 2: // consultar productos con baja cantiadad o sin inventario

                        inventoryOption = Number (prompt(neededProducts + " \n\ Que desea hacer a continuacion: \n\ 1) Consultar Inventario \n\ 2) Pre-cargar Invetario \n\ 0) salir"));
                        if(inventoryOption == 2) inventoryOption =3;
                        else if(inventoryOption <1 || inventoryOption >2) inventoryOption=0;

                    break;

                    case 3:

                        productToInclude =Number(prompt("¿cuantos productos va a ingresar?"));

                        for(let i = 1; i<productToInclude+1; i++)
                        {
                            product = (prompt("Ingrese el producto " + i));
                            console.log(totalProducts);
                            if(totalProducts == undefined)
                            {
                                totalProducts = product;
                                console.log(totalProducts);
                            }else 
                            {
                                totalProducts = totalProducts + product;
                            }
                             
                        }
                        alert("Productos ingresados "+ totalProducts);
                        console.log(inventoryOption);
                        inventoryOption = Number (prompt("Que desea hacer a continuacion: \n\ 1) Consultar Inventario \n\ 2) Lista Productos Requeridos \n\ 0) salir"));
                        console.log(inventoryOption);
                        if(inventoryOption <1 || inventoryOption >3) inventoryOption=0;
                        console.log(inventoryOption);

                    break;
                }   
                access =0;
            }
        }
        else if(userAccess == "testFuncionario")
        {
            user = Number(prompt(userSelection));
            inventoryOption = Number(inventoryOptionMenuEmployee);
            
            //switch option to execute 
            
            access =0;

        }
        else{
            alert(" este usuario invalido, reintente")
            console.log(access);
        } 
     }
     else if(access ==2) // crearcion de usuario nuevo
     {
        nombre = prompt("Ingrese Nombre");
        apellido = prompt ("Ingrese Apellido");
        paciente = Number(prompt(userSelection));
        newUser = prompt("Cree el nombre de usuario para acceder al sistema");
        access = Number(prompt(accessMenu));
     }

}while(access ==1);

alert("Ha terminado el programa, que tenga un buen dia");


