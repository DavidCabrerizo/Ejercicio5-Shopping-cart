// Hacer la solicitud a la API usando fetch
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Obtener una lista de URLs de imágenes de los productos (debes adaptar el parsing según la estructura de la respuesta)
        const imageUrls = data.map(product => product.image_link);

        // Seleccionar una imagen aleatoria de la lista
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // Establecer la URL de la imagen aleatoria en la etiqueta img
        document.getElementById('randomImage').src = randomImageUrl;
    })
    .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
    });

    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Obtener una lista de URLs de imágenes de los productos (debes adaptar el parsing según la estructura de la respuesta)
        const imageUrls = data.map(product => product.image_link);

        // Seleccionar una imagen aleatoria de la lista
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // Establecer la URL de la imagen aleatoria en la etiqueta img
        document.getElementById('randomImage1').src = randomImageUrl;
    })
    .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
    });




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
