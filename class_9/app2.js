const tableName = document.getElementById('heading')
tableName.textContent = 'My Shopping Cart'

const shoppingCart = new Item ('Arroz', 'Marca de Arroz', 30, 25.2);

function mostrarTabla(){
    const tabla = document.getElementById('items');
    tabla.innerHTML = ''; // limpio el HTML
    let counter = 1;

    shoppingCart.forEach((item => {
        tabla.innerHTML = item.innerHTML +
        `
         <tr>
         <th>${counter}</th>
         <td>${item.nombre}</td>
         <td>${item.nombre}</td>
         <td>${item.marca}</td>
         <rd>${item.cantidad}</rd>
         <td>${item.precio}</td>
         </tr>
        `;
        counter ++;
    }))
}

mostrarTabla();