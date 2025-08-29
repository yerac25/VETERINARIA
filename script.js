// Datos de productos
const products = [
    {
        id: 1,
        name: "Royal Canin Adulto Perro",
        category: "alimentos",
        price: 850.00,
        description: "Alimento premium para perros adultos, rico en proteínas y vitaminas esenciales.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Whiskas Gatos Adultos",
        category: "alimentos",
        price: 320.00,
        description: "Alimento balanceado para gatos adultos con sabor a pescado y pollo.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Antiparasitario Frontline",
        category: "medicamentos",
        price: 450.00,
        description: "Tratamiento antiparasitario efectivo contra pulgas y garrapatas.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        badge: "Recomendado"
    },
    {
        id: 4,
        name: "Vitaminas PetVits",
        category: "medicamentos",
        price: 280.00,
        description: "Suplemento vitamínico para fortalecer el sistema inmunológico.",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Collar Antipulgas",
        category: "accesorios",
        price: 180.00,
        description: "Collar repelente de pulgas con duración de 8 meses.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        name: "Juguete Pelota Interactiva",
        category: "accesorios",
        price: 120.00,
        description: "Pelota con sonido para estimular el juego y ejercicio de tu mascota.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        name: "Shampoo Hipoalergénico",
        category: "higiene",
        price: 220.00,
        description: "Shampoo suave para mascotas con piel sensible, sin irritantes.",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        name: "Cepillo de Cerdas Suaves",
        category: "higiene",
        price: 95.00,
        description: "Cepillo especial para mascotas de pelo corto y largo.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
];

// Variables globales
let cart = [];
let currentFilter = 'todos';
let searchTerm = '';

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartItems = document.getElementById('cartItems');
const cartCount = document.querySelector('.cart-count');
const totalAmount = document.querySelector('.total-amount');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const confirmationModal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');
const cancelCheckout = document.getElementById('cancelCheckout');
const confirmOrder = document.getElementById('confirmOrder');
const continueShopping = document.getElementById('continueShopping');

// Navegación móvil
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Carrito de compras
cartIcon.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
}

// Búsqueda y filtros
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase();
    filterProducts();
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.category;
        filterProducts();
    });
});

function filterProducts() {
    let filteredProducts = products;
    
    // Filtrar por categoría
    if (currentFilter !== 'todos') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)} MXN</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function getCategoryName(category) {
    const categories = {
        'alimentos': 'Alimentos',
        'medicamentos': 'Medicamentos',
        'accesorios': 'Accesorios',
        'higiene': 'Higiene'
    };
    return categories[category] || category;
}

// Funciones del carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    // Actualizar contador del carrito
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar items del carrito
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        totalAmount.textContent = '$0.00 MXN';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} MXN</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Actualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)} MXN`;
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    openCheckoutModal();
});

function openCheckoutModal() {
    checkoutModal.classList.add('show');
    updateOrderSummary();
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('show');
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    let summaryHTML = '';
    
    cart.forEach(item => {
        summaryHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)} MXN</span>
            </div>
        `;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summaryHTML += `
        <hr style="margin: 1rem 0;">
        <div style="display: flex; justify-content: space-between; font-weight: bold;">
            <span>Total:</span>
            <span>$${total.toFixed(2)} MXN</span>
        </div>
    `;
    
    orderSummary.innerHTML = summaryHTML;
}

// Eventos del modal de checkout
closeModal.addEventListener('click', closeCheckoutModal);
cancelCheckout.addEventListener('click', closeCheckoutModal);

confirmOrder.addEventListener('click', () => {
    const form = document.getElementById('checkoutForm');
    if (form.checkValidity()) {
        processOrder();
    } else {
        form.reportValidity();
    }
});

function processOrder() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Simular procesamiento de orden
    const orderNumber = 'ORD-' + Date.now();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Mostrar modal de confirmación
    closeCheckoutModal();
    showConfirmationModal(orderNumber, customerName, total);
    
    // Limpiar carrito
    cart = [];
    updateCart();
    closeCartSidebar();
}

function showConfirmationModal(orderNumber, customerName, total) {
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = `
        <p><strong>Número de orden:</strong> ${orderNumber}</p>
        <p><strong>Cliente:</strong> ${customerName}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)} MXN</p>
        <p><strong>Estado:</strong> <span style="color: #27ae60;">Confirmado</span></p>
    `;
    
    confirmationModal.classList.add('show');
}

continueShopping.addEventListener('click', () => {
    confirmationModal.classList.remove('show');
});

// Notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1003;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .empty-cart {
        text-align: center;
        color: #666;
        padding: 2rem;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// Funcionalidad de pestañas en la página de información
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remover clase active de todos los botones y paneles
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Agregar clase active al botón y panel seleccionado
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Formulario de contacto
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Mensaje enviado exitosamente. Te contactaremos pronto.');
            contactForm.reset();
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar productos en la página de productos
    if (productsGrid) {
        displayProducts(products);
    }
    
    // Inicializar pestañas en la página de información
    initTabs();
    
    // Inicializar formulario de contacto
    initContactForm();
    
    // Cargar carrito desde localStorage si existe
    const savedCart = localStorage.getItem('vetcare-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
});

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('vetcare-cart', JSON.stringify(cart));
}

// Actualizar localStorage cada vez que se modifica el carrito
const originalUpdateCart = updateCart;
updateCart = function() {
    originalUpdateCart();
    saveCart();
};

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de números en estadísticas
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent);
                let currentNumber = 0;
                const increment = finalNumber / 50;
                
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        target.textContent = finalNumber + (target.textContent.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(currentNumber) + (target.textContent.includes('+') ? '+' : '');
                    }
                }, 30);
                
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Inicializar animaciones cuando se carga la página
if (document.querySelector('.stats')) {
    animateNumbers();
}
