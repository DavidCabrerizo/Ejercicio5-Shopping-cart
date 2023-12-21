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