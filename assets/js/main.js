// ============================================
// MENÚ MÓVIL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.header-nav')) {
                navLinks.classList.remove('active');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
});

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================

const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// ANIMACIÓN SUAVE PARA ENLACES INTERNOS
// ============================================

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

// ============================================
// SCROLL VERTICAL OPCIONAL EN BLOQUES DE CÓDIGO
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.code-scroll[data-lines]').forEach(function (wrapper) {
        const lines = parseInt(wrapper.getAttribute('data-lines'), 10);
        if (lines > 0) {
            wrapper.style.setProperty('--code-lines', lines);
        }
    });
});

// ============================================
// BOTÓN COPIAR CÓDIGO
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('figure.highlight').forEach(function (block) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);

        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copiar';
        wrapper.appendChild(btn);

        btn.addEventListener('click', function () {
            const code = block.querySelector('code');
            const text = code ? code.innerText : '';
            navigator.clipboard.writeText(text).then(function () {
                btn.textContent = '✓ Copiado';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.textContent = 'Copiar';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
    });
});

// ============================================
// CAMBIO DE TEMA (CLARO/OSCURO / N TEMAS)
// ============================================

const THEMES = [
    { name: 'light', icon: '☀️' }, // Modo Claro (default)
    { name: 'dark', icon: '🌙' },  // Modo Oscuro
];

const OTHER_THEMES = [
    { name: 'gameboy', icon:'🎮' },
    { name: 'halloween', icon:'🎃' }
]

const DEFAULT_THEME_NAME = 'light';

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    let currentThemeName = localStorage.getItem('theme');

    // --- Lógica de Inicialización ---

    // 1. Determinar el tema inicial
    if (!currentThemeName) {
        // Si no hay preferencia oscura, usa el tema claro por defecto
            currentThemeName = DEFAULT_THEME_NAME;
    }

    // Aplicar el tema inicial
    body.setAttribute('data-theme', currentThemeName);

    // 2. Actualizar el ícono inicial
    updateIcon(currentThemeName);


    // --- 3. Listener para el clic (Lógica del Cliclo) ---
    toggleButton.addEventListener('click', () => {

        const currentIndex = THEMES.findIndex(t => t.name === body.getAttribute('data-theme'));

        // Calcular el índice del siguiente tema: avanza 1 y vuelve al inicio (0) si llega al final.
        const nextIndex = (currentIndex + 1) % THEMES.length;
        const nextTheme = THEMES[nextIndex];

        const newThemeName = nextTheme.name;

        // Aplicar nuevo tema
        body.setAttribute('data-theme', newThemeName);

        // Guardar la preferencia
        localStorage.setItem('theme', newThemeName);

        // Actualizar el ícono
        updateIcon(newThemeName);
    });
});

// Función auxiliar para cambiar el ícono
function updateIcon(themeName) {
    const themeData = THEMES.find(t => t.name === themeName);
    const iconSpan = document.querySelector('#theme-toggle .icon');

    if (iconSpan && themeData) {
        // Muestra el ícono del *siguiente* tema en el ciclo para indicar la acción

        // Primero, encuentra el índice actual
        const currentIndex = THEMES.findIndex(t => t.name === themeName);

        // Calcula el índice del ícono a mostrar (el próximo en la lista)
        const nextIconIndex = (currentIndex + 1) % THEMES.length;

        iconSpan.textContent = THEMES[nextIconIndex].icon;
    }
}

function updateTheme(themeName) {
    const themeData = THEMES.find(t => t.name === themeName);

    if (themeData) {
        document.body.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        updateIcon(themeName);
    }

    const addionalThemeData = OTHER_THEMES.find(t => t.name === themeName);
    if (addionalThemeData) {
        document.body.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        updateIcon(themeName);
    }

}
