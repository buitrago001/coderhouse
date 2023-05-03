// variables 
let option; // variable that control or tracks the option the user selects
let registerCounter;
let newUser; // array to store user information to construct a new object
let searchValidator; //verifies if user exist
let type; // user type employee or client
let userName;
let password;


// menu variables
const accessMenu = ['Ingresar', 'Registarse'];
const logInMenu = ['email', 'Contraseña'];
const registerOptions = ['Nombre', 'Apellido', 'Telefono de contacto', 'email', 'Contraseña', 'Familiar'];
const historyMenu = ['Contultar', 'Agregar'];
const menu = ['Consultar Productos Disponibles', 'Consultar Productos Bajos', 'Producto sin inventario', 'pre-ingreso de inventario', 'ingreso de inventario', 'confirmar ingreso inventario', 'actualizar inventario', 'Buscar Productos'];

// object
const user = new User();
// const user = [new User ('clientName', 'clientLastName', 30400000, 'clienteemail@email.com', 123456, 'cliente'), new User ('employeeName', 'employeeLastName', 3000000, 'empleadoemail@email.com', 123456, 'empleado')];

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
        searchValidator = user.searchUser(userName, password);
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
        return option = mainMenu(type = user.userType(userName));
    }
    
    
}

function signUp (){
    registerCounter = 0;
    newUser = []; // start array empty
    while (registerCounter < registerOptions.length){
        newUser.push(prompt ('Complete la siguiente information \n Ingrese :' + '\n' + registerOptions[registerCounter]));
        registerCounter ++;
        console.log(newUser);
    }
    userType = 'cliente';
    option = mainMenu(userType);
    return option;
}

function mainMenu(type){
    console.log (type);
    while (option != 0)
    {
    if(type == 'cliente')
    {
        option = Number(prompt('Seleccione la opcion que desea realizar \n' + menu[0] + "\n" + menu[1] + "\n" + menu[2] + "\n" + menu[3] + "\n" + menu[7]));
    }
    else
    {
        option = Number ( prompt('Seleccione la opcion que desea realizar \n' + menu[0] + "\n" + menu[1] + "\n" + menu[2] + "\n" + menu[4] + "\n" + menu[5] + "\n" + menu[6] + "\n" + menu[7]));
    }
    }
    return option = 0;
}