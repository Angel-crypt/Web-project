// Función para alternar el tema
function toggleTheme() {
    // Cambia el tema entre claro y oscuro
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
    // Guarda el tema en localStorage
    localStorage.setItem('theme', body.dataset.theme);
}

// Funcion para alternar la apariencia
function setColorScheme(scheme) {
    // Cambia el esquema de color
    document.documentElement.setAttribute('data-color-scheme', scheme);
    // Guarda el esquema de color en localStorage
    localStorage.setItem('color-scheme', scheme);
}


// Función para cargar el tema guardado
function loadTheme() {
    // Carga el tema y esquema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedColorScheme = localStorage.getItem('color-scheme');
    // Si no hay tema guardado, establece el tema  por defecto
    setColorScheme(savedColorScheme);
    // Si hay un tema guardado, lo aplica al body
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
    }
}

// Función para mostrar el estado de un proyecto con emoji
function getStatusEmoji(status) {
    // Devuelve un emoji basado en el estado del proyecto
    const emojis = {
        "despegando": "🚀",
        "marcha": "⚙️",
        "fuego": "🔥",
        "standby": "⏸️",
        "terminado": "🏁",
        "bocetando": "📝"
    };
    // Si el estado no está en el objeto emojis, devuelve una cadena vacía
    return emojis[status] || "";
}

// Función para mostrar el estado de un proyecto con texto
function formatStatus(status) {
    // Devuelve el estado del proyecto en formato de texto
    return status.replace("-", " ").toUpperCase();
}

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el tema guardado al cargar la página
    loadTheme();

    // Asignar el evento de clic al botón de cambio de tema
    const themeToggleButton = document.getElementById('themeToggleButton');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
