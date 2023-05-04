// variables 
let option; // variable that control or tracks the option the user selects
let registerCounter;
let newUser; // array to store user information to construct a new object
let searchValidator; //verifies if user exist
let type; // user type employee or client
let userName;
let password;
 // array that store user information from the array of objects to validate existing user


// menu variables
const accessMenu = ['Ingresar', 'Registarse'];
const logInMenu = ['email', 'Contraseña'];
const registerOptions = ['Nombre', 'Apellido', 'Telefono de contacto', 'email', 'Contraseña', 'Familiar'];
const historyMenu = ['Contultar', 'Agregar'];
const menu = ['Consultar Productos Disponibles', 'Consultar Productos Bajos', 'Producto sin inventario', 'pre-ingreso de inventario', 'ingreso de inventario', 'confirmar ingreso inventario', 'actualizar inventario', 'Buscar Productos'];

// object
const userObjectArray = [new User ('clientName', 'clientLastName', 30400000, 'clienteemail@email.com', 123456, 'cliente'), new User ('employeeName', 'employeeLastName', 3000000, 'empleadoemail@email.com', 123456, 'empleado')];

// funtions
function initialMenu(){
    option = Number(prompt ('Bienvenido, que desea hacer?'+ '\n' + accessMenu[0] + '\n' + accessMenu[1] ));
    return option;
}

function logIn() // option 1 from initial Menu
{
    do{
        userName = prompt ('Por favor ingrese su ' + logInMenu[0]);
        password = prompt ('Por favor ingrese su ' + logInMenu[1]);
        let userSearch =  [];

        for(let i = 0; i<userObjectArray.length; i++){
            userSearch.push(userObjectArray[i].email);
        }

        for(let i = 0; i<userObjectArray.length; i++ )
        {
            if(userObjectArray[i].email == userName){
                searchValidator = true
                type = userObjectArray[i].role
                i = userObjectArray.length;
            }else 
            {
                searchValidator = false;
            }
        }

        if(searchValidator == false) {
            option = Number(prompt ('Usuario o contraseña incorrecto, presione 1 si desea reintentar o 0 para salir?'));
            if(option == 0){
                searchValidator = true;
            }  
        }
    }while (searchValidator == false)
    if(option == 0){
        return option;
    }
    else{
        mainMenu(type);
    }
    
    
}

function signUp (){
    registerCounter = 0;
    newUser = []; // start array empty, array to gather all information to create the user object
    while (registerCounter < registerOptions.length){ // store all data in an array
        newUser.push(prompt ('Complete la siguiente information \n Ingrese :' + '\n' + registerOptions[registerCounter]));
        registerCounter ++;
        if(registerCounter == registerOptions-1){
            newUser[5] = 'cliente'
        }
    }
    console.log(newUser);
    const userObject = Object.values(newUser) // convert the array into an object
    userObjectArray.push(userObject); // add the new object to the array of object
    type = 'cliente';
    option = mainMenu(type);
    return option;
}

function mainMenu(type){
    
    while (option != 0)
    {
    if(type == 'cliente')
    {
        option = Number(prompt('Seleccione la opcion que desea realizar \n' + '1' + menu[0] + "\n" + '2' + menu[1] + "\n" + '3' + menu[2] + "\n" + '4' + menu[3] + "\n" + '5' + menu[7]));
        alert ("Gracias, estamos trabajando para tener las opciones disponibles");
        opcion = 0
    }
    else
    {
        option = Number ( prompt('Seleccione la opcion que desea realizar \n' + '1' + menu[0] + "\n" + '2' + menu[1] + "\n" + '3' + menu[2] + "\n" + '4' + menu[4] + "\n" + '5' + menu[5] + "\n" + '6' + menu[6] + "\n" + '7' + menu[7]));
        alert ("Gracias, estamos trabajando para tener las opciones disponibles");
        opcion = 0
    }
    }
    return option = 0;
}