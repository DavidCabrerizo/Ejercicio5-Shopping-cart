function buscarProductos() {
    var terminoBusqueda = document.getElementById('searchBox').value;
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        .then(response => response.json())
        .then(data => {
            var productosFiltrados = data.filter(producto => {
                return producto.name.toLowerCase().includes(terminoBusqueda.toLowerCase());
            });
            mostrarResultados(productosFiltrados);
        })
        .catch(error => console.error('Error:', error));
}

function mostrarResultados(productos) {
    var contenedorResultados = document.getElementById('resultadosBusqueda');
    contenedorResultados.innerHTML = ''; // Limpiar resultados anteriores

    productos.forEach(producto => {
        var div = document.createElement('div');
        div.className = 'col-md-4 mb-3';
        div.innerHTML = `
            <div class="card">
                <img src="${producto.image_link}" class="card-img-top" alt="${producto.name}">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.price} ${producto.price_sign}</p>
                </div>
            </div>
        `;
        contenedorResultados.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // ...

    // Agrega un evento de clic al ícono del corazón
    const heartIcon = document.querySelector('.nav-icons .fa-heart');
    heartIcon.addEventListener('click', function() {
        // Aquí puedes realizar acciones adicionales antes de abrir el modal, si es necesario

        // Abre el modal
        const wishlistModal = new bootstrap.Modal(document.getElementById('wishlistModal'));
        wishlistModal.show();

        // Aquí puedes cargar dinámicamente el contenido de la wishlist si es necesario
        // Puedes usar AJAX, fetch, u otras técnicas para obtener y mostrar los datos en el modal
        // Por ahora, el modal simplemente se abrirá al hacer clic en el corazón.
    });

    // ...
});



