const cartProductsContainer = document.getElementById('cart-products-container');
const totalAmountContainer = document.getElementById('total-amount');

// Obtener la lista de productos en el carrito desde localStorage
const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

// Mostrar productos en el carrito
function displayCartProducts() {
  cartProductsContainer.innerHTML = '';
  let totalAmount = 0;

  cartProducts.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    if (product.image_link) {
      productImage.src = product.image_link;

      productImage.onerror = function() {
          if (this.naturalWidth === 0 && this.naturalHeight === 0) {
              this.src = '/img/nofoto.jpg';
          }
      };
  } else {
      productImage.src = '/img/nofoto.jpg';
  }
    // productImage.src = product.image_link || '/img/nofoto.jpg';
    // productImage.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    if (typeof product.price !== 'undefined') {
      productPrice.textContent = `Precio: $${product.price}`;
      totalAmount += parseFloat(product.price) * (product.units || 1);
    } else {
      productPrice.textContent = 'Precio no disponible';
    }

    // Mostrar unidades y botones para cada producto
    const unitCountDisplay = document.createElement('span');
    unitCountDisplay.textContent = `Unidades: ${product.units || 1}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Añadir';
    addButton.addEventListener('click', () => {
      addToCart(product);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Quitar';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(unitCountDisplay);
    productDiv.appendChild(addButton);
    productDiv.appendChild(removeButton);

    cartProductsContainer.appendChild(productDiv);
  });

  totalAmountContainer.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Función para añadir un artículo al carrito
function addToCart(product) {
  const existingProductIndex = cartProducts.findIndex(p => p.name === product.name);

  if (existingProductIndex !== -1) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    cartProducts[existingProductIndex].units = (cartProducts[existingProductIndex].units || 1) + 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    product.units = 1;
    cartProducts.push(product);
  }

  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  displayCartProducts();
}

// Función para quitar un artículo del carrito
function removeFromCart(index) {
  const removedProduct = cartProducts[index];
  if (removedProduct.units && removedProduct.units > 1) {
    // Si hay más de una unidad, reducir la cantidad
    removedProduct.units -= 1;
  } else {
    // Si solo hay una unidad, quitar el producto del carrito
    cartProducts.splice(index, 1);
  }

  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  displayCartProducts();
}

// Obtener referencia al botón "Terminar Compra" y al modal
const terminarCompraBtn = document.getElementById('terminarCompraBtn');
const graciasModal = document.getElementById('graciasModal');
const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');
const totalCompraModal = document.getElementById('totalCompraModal');


// Asociar evento de clic al botón "Terminar Compra"
terminarCompraBtn.addEventListener('click', () => {
  // Mostrar el modal "Gracias por su compra"
  graciasModal.style.display = 'block';

  // Calcular y mostrar el importe total en el modal
const totalAmount = parseFloat(totalAmountContainer.textContent.replace('Total: $', ''));
totalCompraModal.textContent = `$${totalAmount.toFixed(2)}`;
});





// Asociar evento de clic al botón "Vaciar Carrito y Volver a la Galería"
vaciarCarritoBtn.addEventListener('click', () => {
  // Vaciar el carrito
  localStorage.removeItem('cartProducts');
  // Redirigir a la página de galería
  window.location.href = '../html/galeria.html';
});

document.addEventListener("DOMContentLoaded", function() {
  // Encuentra el botón de cierre del modal por su id y añade un event listener
  document.getElementById('cerrarModal').addEventListener('click', function() {
    // Busca el modal por su id y modifica su estilo para ocultarlo
    // document.getElementById('graciasModal').style.display = 'none';
    window.location.href = '../html/galeria.html';
  });
});


// Llamada a displayCartProducts
displayCartProducts();





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

  
});
