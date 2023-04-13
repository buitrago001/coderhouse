// Atributos Objeto Persona

/**
 * nombre
 * apellido
 * edad
 * id
 */

// declarando objetos
// forma literal de objetos
const atributo = "El atributo de "
let atributoOpbjeto = 'apellido';


const persona = {nombre: 'pepe', apellido: 'gomez', edad: 38, id:12345, altura:1.55}
const persona2 = {nombre: 'manuelito', apellido: 'arandano', edad: 3, id:54321, altura:0.3}

//como accedemos a los atributos?
console.log (persona)

console.log(atributo + persona.id)
console.log(atributo + persona2.id)

//quiero modificar el contenido de un atributo de un objeto, como hago?

persona.id = 09876;
console.log(atributo + persona.nombre  + ' ' + persona.id)

//otra forma de acceder a los atributos del objeto

console.log(persona[atributoOpbjeto])

///quiero recorrer toda la list de atributos
for(atributoOpbjeto in persona){
    console.log(persona[atributoOpbjeto]);
}

// Constructor

//constructor de productos
function Productos(nombre, precio, marca){
    this.nombre =nombre;
    this.precio =precio;
    this.marca = marca;
}

const producto1 =  new Productos('Arroz', 12.50, 'Marolio');
console.log(producto1);

const Pokemon1 = new Pokemon('Pikachu', 'electrico', 1, 'trueno', 'Ash', 'Impactrueno', 500, 200 );
const Pokemon2 = new Pokemon('Charmander', 'fuego', 1, 'Brock', 'llamarada', 300, 150);

console.log(Pokemon1);
console.log(Pokemon2);

Pokemon1.atacar('Charmander')
Pokemon1.volverPokebola();
Pokemon2.evolucionar('Charizar', 100);
Pokemon1.recibirAtaque('llamadara', 'Charmander');