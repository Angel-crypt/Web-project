// Función para alternar el tema
function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', body.dataset.theme);
}

// Funcion para alternar la apariencia
function setColorScheme(scheme) {
    document.documentElement.setAttribute('data-color-scheme', scheme);
    localStorage.setItem('color-scheme', scheme);
}


// Función para cargar el tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const savedColorScheme = localStorage.getItem('color-scheme');
    setColorScheme(savedColorScheme);
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
    }
}

function getStatusEmoji(status) {
    const emojis = {
        "despegando": "🚀",
        "marcha": "⚙️",
        "fuego": "🔥",
        "standby": "⏸️",
        "terminado": "🏁",
        "bocetando": "📝"
    };
    return emojis[status] || "";
}

function formatStatus(status) {
    return status.replace("-", " ").toUpperCase();
}

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();

    // Asignar el evento de clic al botón de cambio de tema
    const themeToggleButton = document.getElementById('themeToggleButton');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
