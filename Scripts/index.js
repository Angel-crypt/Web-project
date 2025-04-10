// Textos para el efecto de escritura
const texts = [
    "Lleva tus proyectos al siguiente nivel",
    "Comparte, aprende y crece con la comunidad universitaria",
    "Innova, colabora y destaca con tus proyectos",
    "Convierte tus ideas en proyectos exitosos",
    "Conéctate con mentes creativas y haz historia"
];

// Variables para el efecto de escritura
let currentTextIndex = 0;  // Índice del texto actual
let currentCharIndex = 0;  // Índice del carácter actual
const typingSpeed = 100;   // Velocidad de escritura en milisegundos
const eraseSpeed = 25;     // Velocidad de borrado en milisegundos
const pauseBetweenTexts = 2500;   // Pausa entre textos en milisegundos

// Inicializa el efecto de escritura al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Llama a la función de escritura al cargar la página
    type();
});

// Funciones para el efecto de escritura
function type() {
    // Verifica si el índice del carácter actual es menor que la longitud del texto actual
    const currentText = texts[currentTextIndex];
    if (currentCharIndex < currentText.length) {
        // Agrega el siguiente carácter al elemento con id "dynamic-text"
        document.getElementById("dynamic-text").textContent += currentText.charAt(currentCharIndex);
        // Incrementa el índice del carácter actual
        currentCharIndex++;
        // Llama a la función de escritura nuevamente después de un intervalo
        setTimeout(type, typingSpeed);
    } else { // Si se ha escrito todo el texto actual
        // Espera un tiempo antes de comenzar a borrar el texto
        setTimeout(erase, pauseBetweenTexts);
    }
}

// Función para borrar el texto
function erase() {
    // Verifica si el índice del carácter actual es mayor que 0
    const currentText = texts[currentTextIndex];
    if (currentCharIndex > 0) {
        // Borra el último carácter del elemento con id "dynamic-text"
        document.getElementById("dynamic-text").textContent = currentText.substring(0, currentCharIndex - 1);
        // Decrementa el índice del carácter actual
        currentCharIndex--;
        // Llama a la función de borrado nuevamente después de un intervalo
        setTimeout(erase, eraseSpeed);
    } else { // Si se ha borrado todo el texto actual
        // Espera un tiempo antes de comenzar a escribir el siguiente texto
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        // Reinicia el índice del carácter actual
        setTimeout(type, typingSpeed + 1000);
    }
}


// Animacion de circulos en mouse

// Variables para la animación de círculos
let lastCircleTime = 0; // Último tiempo de animación
const circleInterval = 100; // Intervalo de tiempo entre animaciones
let mouseAnimationEnabled = true; // Habilitar animación de mouse
let enableAnimationTimeout; // Temporizador para habilitar la animación

// Evento para detectar el movimiento del mouse
document.onmousemove = function (event) {
    if (!mouseAnimationEnabled) return; // Si la animación está deshabilitada, no hacer nada
    const currentTime = Date.now(); // Obtener el tiempo actual
    if (currentTime - lastCircleTime > circleInterval) {
        lastCircleTime = currentTime; // Actualizar el último tiempo de animación
        animateCircles(event); // Llamar a la función de animación de círculos
    }
};

// Evento para habilitar la animación de mouse al pasar el mouse sobre ciertos elementos
document.addEventListener("mouseover", (event) => {
    // Verifica si el mouse está sobre un botón, imagen o enlace
    if (event.target.matches("button, img, a")) {
        mouseAnimationEnabled = false; // Deshabilitar la animación
        clearTimeout(enableAnimationTimeout); // Limpiar el temporizador
    }
});

// Evento para habilitar la animación de mouse al salir del botón, imagen o enlace
document.addEventListener("mouseout", (event) => {
    // Verifica si el mouse salió de un botón, imagen o enlace
    if (event.target.matches("button, img, a")) {
        // Habilitar la animación después de un tiempo
        enableAnimationTimeout = setTimeout(() => {
            mouseAnimationEnabled = true;
        }, 1000);
    }
});

// Función para animar los círculos
function animateCircles(event) {
    // Crear un nuevo elemento div para el círculo
    var circle = document.createElement("div");
    // Agregar la clase "circle" al elemento
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle); // Agregar el círculo al body
    circle.style.left = event.clientX + 'px'; // Establecer la posición izquierda del círculo
    circle.style.top = event.clientY + 'px'; // Establecer la posición superior del círculo
    circle.style.borderColor = '#77b2ff'; // Establecer el color del borde del círculo
    circle.style.transition = "all 1s linear"; // Establecer la transición del círculo

    circle.style.left = circle.offsetLeft - 20 + 'px'; // Mover el círculo a la izquierda
    circle.style.top = circle.offsetTop - 20 + 'px'; // Mover el círculo hacia arriba

    circle.style.width = "50px"; // Establecer el ancho del círculo
    circle.style.height = "50px"; // Establecer la altura del círculo
    circle.style.borderWidth = "5px"; // Establecer el ancho del borde del círculo
    circle.style.opacity = 0; // Establecer la opacidad del círculo a 0 para que desaparezca

    // Esperar un segundo antes de eliminar el círculo del DOM
    setTimeout(() => {
        circle.remove();
    }, 1000);
}