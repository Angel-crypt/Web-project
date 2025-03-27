const defaultProjects = [
    {
        name: "Aprendizaje con IA",
        description: "Desarrollo inicial de una plataforma educativa con inteligencia artificial.",
        status: "despegando",
        progress: 10,
        dueDate: "30 Abr 2025",
        image: "images/projects/aprendizaje.jpg",
        tags: ["Tecnología", "Educación", "IA"]
    },
    {
        name: "Sistema de Energía Solar",
        description: "Optimización del rendimiento de paneles solares con análisis de datos.",
        status: "en-marcha",
        progress: 50,
        dueDate: "15 Jun 2025",
        image: "images/projects/solar.jpg",
        tags: ["Energía", "Sostenibilidad", "Tecnología"]
    },
    {
        name: "Reconocimiento Facial",
        description: "Implementación avanzada de reconocimiento facial en tiempo real.",
        status: "en-fuego",
        progress: 85,
        dueDate: "1 May 2025",
        image: "images/projects/facial.jpg",
        tags: ["Seguridad", "IA", "Reconocimiento Facial"]
    },
    {
        name: "Red Social Universitaria",
        description: "Desarrollo de una red social para conectar estudiantes y profesores.",
        status: "en-standby",
        progress: 30,
        dueDate: "10 Jul 2025",
        image: "images/projects/red-social.jpg",
        tags: ["Red Social", "Educación", "Conexión"]
    },
    {
        name: "Simulación de Robots Autónomos",
        description: "Proyecto exitoso sobre simulación de robots con IA.",
        status: "mision-cumplida",
        progress: 100,
        dueDate: "15 Mar 2025",
        image: "images/projects/robots.jpg",
        tags: ["Robots", "IA", "Automatización"]
    },
    {
        name: "Aplicación de Control de Hábitos",
        description: "Propuesta de una app para ayudar a formar hábitos saludables.",
        status: "en-boceto",
        progress: 5,
        dueDate: "20 Ago 2025",
        image: "images/projects/habitos.jpg",
        tags: ["Salud", "Bienestar", "Aplicaciones"]
    }
];


const projectsContainer = document.querySelector(".row.g-4");

function renderProjects() {
    let storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    if (storedProjects.length === 0) {
        storedProjects = [...defaultProjects];
        localStorage.setItem("projects", JSON.stringify(storedProjects));
    }

    projectsContainer.innerHTML = "";
    storedProjects.forEach((project, projectIndex) => {
        const dateLabel = (project.status === "mision-cumplida" && project.progress === 100) ? "Fecha de Entrega" : "Fecha Prevista";

        // Renderizar etiquetas con colores según los tags
        const tags = project.tags || [];
        const tagsHTML = project.tags.map((tag, tagIndex) => {
            const tagId = `tag-${projectIndex}-${tagIndex}`;  // Un id único para cada tag
            let badgeClass = 'badge-primary'; // Default color for badges

            // Define color based on the tag or any custom logic
            switch (tag.toLowerCase()) {
                case 'tecnología':
                    badgeClass = 'badge-tech';
                    break;
                case 'ciencias':
                    badgeClass = 'badge-science';
                    break;
                case 'arte':
                    badgeClass = 'badge-art';
                    break;
                case 'innovación':
                    badgeClass = 'badge-inno';
                    break;
                case 'salud':
                    badgeClass = 'badge-health';
                    break;
                case 'educación':
                    badgeClass = 'badge-edu';
                    break;
                case 'software':
                    badgeClass = 'badge-soft';
                    break;
                case 'hardware':
                    badgeClass = 'badge-hard';
                    break;
                case 'ia':
                    badgeClass = 'badge-ai';
                    break;
                default:
                    badgeClass = 'badge-general';
            }

            return `<span id="${tagId}" class="badge badge-pill ${badgeClass} me-2">${tag}</span>`;
        }).join('');

        const projectHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="project-card card h-100">
                <img src="${project.image}" class="card-img-top" alt="Project Image">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">${project.name}</h5>
                        <span class="badge ${project.status}">${getStatusEmoji(project.status)} ${formatStatus(project.status)}</span>
                    </div>
                    <p class="card-text">${project.description}</p>
                    <div class="progress mb-3" style="height: 5px;">
                        <div class="progress-bar" role="progressbar" style="width: ${project.progress}%" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <!-- Mostrar las etiquetas del proyecto con color personalizado -->
                    <div class="d-flex flex-wrap mb-2">
                        ${tagsHTML}
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${dateLabel}: ${project.dueDate}</small>
                    </div>
                </div>
            </div>
        </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}



function getStatusEmoji(status) {
    const emojis = {
        "despegando": "🚀",
        "en-marcha": "⚙️",
        "en-fuego": "🔥",
        "en-standby": "⏸️",
        "mision-cumplida": "🏁",
        "en-boceto": "📝"
    };
    return emojis[status] || "";
}

function formatStatus(status) {
    return status.replace("-", " ").toUpperCase();
}

function isValidUrl(url) {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    return regex.test(url);
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();

    // Obtener elementos
    const projectForm = document.querySelector("#projectForm");
    const createProjectBtn = document.querySelector("#createProjectBtn");
    const cancelBtn = document.querySelector(".btn-secondary");
    const modalElement = document.querySelector("#newProjectModal");
    const modal = new bootstrap.Modal(modalElement);

    // Elementos para etiquetas
    const tagsInput = document.querySelector("#projectTags");
    const tagsContainer = document.querySelector("#tagsContainer");

    let selectedTags = [];
    const availableTags = ["Tecnología", "Ciencia", "Arte", "Innovación", "Salud", "Educación", "Software", "Hardware"];

    // Función para renderizar etiquetas seleccionadas
    function renderTags() {
        tagsContainer.innerHTML = "";
        selectedTags.forEach((tag, index) => {
            const tagElement = document.createElement("span");
            tagElement.classList.add("badge", "bg-primary", "me-1", "p-2", "rounded-pill");
            tagElement.textContent = tag;
            tagElement.style.cursor = "pointer";
            tagElement.addEventListener("click", () => removeTag(index));
            tagsContainer.appendChild(tagElement);
        });
    }

    // Función para agregar una etiqueta
    function addTag(tag) {
        tag = tag.trim();
        if (tag && !selectedTags.includes(tag)) {
            selectedTags.push(tag);
            renderTags();
        }
        tagsInput.value = "";
    }

    // Función para eliminar una etiqueta
    function removeTag(index) {
        selectedTags.splice(index, 1);
        renderTags();
    }

    // Función para mostrar sugerencias
    function showSuggestions() {
        let suggestionsBox = document.querySelector("#suggestionsBox");
        if (!suggestionsBox) {
            suggestionsBox = document.createElement("div");
            suggestionsBox.id = "suggestionsBox";
            suggestionsBox.classList.add("dropdown-menu", "show");
            tagsInput.parentNode.appendChild(suggestionsBox);
        }
        suggestionsBox.innerHTML = "";

        const filter = tagsInput.value.toLowerCase();
        const filteredTags = availableTags.filter(tag => tag.toLowerCase().includes(filter));

        filteredTags.forEach(tag => {
            const option = document.createElement("div");
            option.classList.add("dropdown-item");
            option.textContent = tag;
            option.addEventListener("click", () => {
                addTag(tag);
                suggestionsBox.remove();
            });
            suggestionsBox.appendChild(option);
        });

        if (filteredTags.length === 0) {
            suggestionsBox.remove();
        }
    }

    // Evento para capturar entrada en el input de etiquetas
    tagsInput.addEventListener("input", showSuggestions);

    // Evento para añadir etiqueta con Enter o Coma
    tagsInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            addTag(tagsInput.value);
        }
    });

    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener("click", (event) => {
        if (!tagsInput.contains(event.target)) {
            const suggestionsBox = document.querySelector("#suggestionsBox");
            if (suggestionsBox) suggestionsBox.remove();
        }
    });

    // Evento para crear proyecto
    createProjectBtn.addEventListener("click", () => {
        const name = document.querySelector("#projectName").value.trim();
        const description = document.querySelector("#projectDescripción").value.trim();
        let dueDate = document.querySelector("#dueDate").value;
        const status = document.querySelector("#projectStatus").value;
        const imageUrl = document.querySelector("#projectImage").value.trim();

        if (!name || !description || !status) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        let progress;
        switch (status) {
            case "despegando": progress = 10; break;
            case "en-marcha": progress = 50; break;
            case "en-fuego": progress = 85; break;
            case "en-standby": progress = 30; break;
            case "mision-cumplida": progress = 100; break;
            case "en-boceto": progress = 5; break;
            default: progress = 0;
        }

        if (!dueDate) {
            const currentDate = new Date();
            currentDate.setMonth(currentDate.getMonth() + 6);
            dueDate = currentDate.toLocaleDateString("es-ES");
        }

        let image = "images/projects/default.jpg";
        if (imageUrl && isValidUrl(imageUrl)) {
            image = imageUrl;
        }

        let storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        if (storedProjects.length === 0) {
            storedProjects = [...defaultProjects];
        }

        storedProjects.push({
            name,
            description,
            status,
            progress,
            dueDate,
            image,
            tags: [...selectedTags]
        });

        localStorage.setItem("projects", JSON.stringify(storedProjects));

        // Resetear el formulario y limpiar etiquetas
        projectForm.reset();
        selectedTags = [];
        renderTags();
        modal.hide();
        renderProjects();
    });

    // Evento para cancelar y limpiar el formulario
    cancelBtn.addEventListener("click", () => {
        projectForm.reset();
        selectedTags = [];
        renderTags();
        modal.hide();
    });
});

