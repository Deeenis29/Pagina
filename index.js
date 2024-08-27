tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'alfa': ['"Alfa Slab One"', 'cursive'],
                'alice': ['Alice', 'serif'],
            }
        }
    }
};

// Variables
let menu_button = document.getElementById('menu_button');
let menu = document.getElementById('menu');
let wsp_veterinaria = document.getElementById('wsp_veterinaria');
let numero = "989911654";
let mensaje = "Hola, me gustaría sacar una Cita 👲.";
let urlApiWhats = `https://api.whatsapp.com/send/?phone=${numero}&text=${mensaje}`;

// Función para abrir/cerrar el menú
function abrirMenu() {
    menu.classList.toggle('hidden');
}

// Event listener para el botón de menú
menu_button.addEventListener('click', abrirMenu);

// Ocultar el menú cuando se hace clic en un enlace
let menu_links = document.querySelectorAll('.menu-link');
menu_links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Event listener para el scroll con debounce
window.addEventListener('scroll', debounce(function () {
    const menu = document.getElementById('navegador');
    if (window.scrollY > 50) {
        menu.classList.add('bg-dark');
    } else {
        menu.classList.remove('bg-dark');
    }
}, 100));

// Función debounce para optimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// Event listener para el botón de WhatsApp
if (wsp_veterinaria) {
    wsp_veterinaria.addEventListener('click', function () {
        window.open(urlApiWhats);
    });
}
