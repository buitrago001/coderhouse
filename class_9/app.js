/// algunos elementos del DOM

console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.URL); // path donde esta mi document
console.log(document.contentType);
console.log(document.links); // muestra todos los href
console.log(document.scripts);

/*Tipos de Nodos
Document
Element
Attr -> representa atributos de las etiquetas
Text
Comment
*/

// Acceder a los nodos

/**
 * document.getElementById()
 * document.getElementsByClassName()
 * document.getElementsByTagName
 */

const miH1 = document.getElementById('heading');
miH1.textContent = 'My Shopping Cart'

// cambiar los atributos de los estilos css de mi objeto
miH1.style.color = 'red';

// ver las clases de mi H1
console.log(miH1.classList); // es un array

// agregar una clase
const validacion = true;
if (validacion){
    miH1.classList.remove('danger');
    miH1.classList.add('Andres');
}else{
    miH1.classList.remove('Andres');
    miH1.classList.add('danger');
}

// le quito una clase
miH1.classList.remove('text-center');

const elementos = document.getElementsByClassName('Andres');

if(elementos.length>0){
    console.log(elementos);
}else console.log('no hay elementos que coincidad')

elementos[1].textContent = 'Hola';
elementos[1].classList.add('bg-danger');

const divs = document.getElementsByTagName('div');

if(divs.length>0){
    console.log(divs);
    console.log(divs[0].children);
    console.log(divs[0].innerHTML);
}
