// lista de elementos que vamos a utilizar
let products = [];
let carrito = [];

// Elementos del DOM
// vamos a obtener el elemento del dom usando querySelector
// QuerySelector funcuna igual que getElement, la diferencia es que usa selectores CSS

const selectorProductos = document.querySelector('#productos');
// si necesitas obteer por clase
const selectorProductos2 = document.querySelector('.prod-selector');

// si quiese que me traiga todos los elementos de X clase
const btnesPrimarios =  document.querySelectorAll('.btn-primary');
// si es por nombre de tag
const unDiv = document.querySelector('div'); 



// generamos la lista de productos
// esto hagalo la primea vez que lo ejecutan, luego lo comentan


//envento

document.addEventListener('DOMContentLoaded'), () => {
    products = JSON.parse(localStorage.getItem('productos'));
    popularDropDown()
}

function popularDropDown()
{
    products.forEach((products) => {
        const option = document.createElement('option');
        option.textContent = `${products.nombre} : ${products.precio}]`;
        option.value = products.indexOf(products);
        selectorProductos.appendChild(option);
    });
}