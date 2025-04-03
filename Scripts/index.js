function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
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

// Animacion de texto

const texts = [
    "Lleva tus proyectos al siguiente nivel",
    "Comparte, aprende y crece con la comunidad universitaria",
    "Innova, colabora y destaca con tus proyectos",
    "Convierte tus ideas en proyectos exitosos",
    "Conéctate con mentes creativas y haz historia"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 2
5;
const pauseBetweenTexts = 2500;

function type() {
    const currentText = texts[currentTextIndex];
    if (currentCharIndex < currentText.length) {
        document.getElementById("dynamic-text").textContent += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, pauseBetweenTexts);
    }
}

function erase() {
    const currentText = texts[currentTextIndex];
    if (currentCharIndex > 0) {
        document.getElementById("dynamic-text").textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, typingSpeed + 1000);
    }
}
type();

// Animacion de circulos en mouse

let lastCircleTime = 0;
const circleInterval = 100;
let mouseAnimationEnabled = true;
let enableAnimationTimeout;

document.onmousemove = function (event) {
    if (!mouseAnimationEnabled) return;

    const currentTime = Date.now();
    if (currentTime - lastCircleTime > circleInterval) {
        lastCircleTime = currentTime;
        animateCircles(event);
    }
};

document.addEventListener("mouseover", (event) => {
    if (event.target.matches("button, img, a")) {
        mouseAnimationEnabled = false;
        clearTimeout(enableAnimationTimeout);
    }
});

document.addEventListener("mouseout", (event) => {
    if (event.target.matches("button, img, a")) {
        enableAnimationTimeout = setTimeout(() => {
            mouseAnimationEnabled = true;
        }, 1000);
    }
});

function animateCircles(event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
    circle.style.borderColor = '#77b2ff';
    circle.style.transition = "all 1s linear";

    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;

    setTimeout(() => {
        circle.remove();
    }, 1000);
}