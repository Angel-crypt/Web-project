// Función para alternar el tema
function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', body.dataset.theme);
}

// Función para cargar el tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
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
