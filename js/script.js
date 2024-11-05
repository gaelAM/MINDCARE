// Función para cerrar el menú
function closeMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.add('hidden');
        setTimeout(() => {
            menu.style.display = 'none';
            menu.classList.remove('hidden');
        }, 300);
    }
}

// Detectar clics fuera del menú (solo para computadoras)
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const isClickInside = menu.contains(event.target);
    const isClickOnMenuButton = event.target.closest('.hamburger-menu');

    if (!isClickInside && !isClickOnMenuButton && !isMobileDevice()) {
        closeMenu();
    }
});

// Detectar cuando el cursor sale del menú en computadoras
document.addEventListener('mousemove', function(event) {
    const menu = document.getElementById('menu');
    const isCursorInside = menu.contains(event.target);
    if (!isCursorInside && menu.classList.contains('active') && !isMobileDevice()) {
        closeMenu();
    }
});

// Detectar clic en el ícono del menú en dispositivos móviles
document.addEventListener('touchstart', handleTouchStart, false);

function handleTouchStart(evt) {
    const menuButton = document.querySelector('.hamburger-menu');
    if (evt.target.closest('.hamburger-menu')) {
        toggleMenu();
    }
}

// Función para alternar el menú
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.add('hidden');
        setTimeout(() => {
            menu.style.display = 'none';
            menu.classList.remove('hidden');
        }, 300);
    } else {
        menu.style.display = 'flex';
        menu.classList.add('active');
    }
}

// Función para detectar si el dispositivo es móvil
function isMobileDevice() {
    return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}


