// Array de proyectos por defecto
const defaultProjects = [
    {   
        id: 1,
        name: "Aprendizaje con IA",
        description: "Desarrollo inicial de una plataforma educativa con inteligencia artificial.",
        status: "despegando",
        progress: 10,
        dueDate: "2025-04-30",
        image: "images/projects/aprendizaje.webp",
        tags: ["Tecnología", "Educación", "IA"],
        creationDate: "2025-03-10"
    },
    {
        id: 2,
        name: "Sistema de Energía Solar",
        description: "Optimización del rendimiento de paneles solares con análisis de datos.",
        status: "marcha",
        progress: 50,
        dueDate: "2025-06-15",
        image: "images/projects/solar.webp",
        tags: ["Energía", "Sostenibilidad", "Tecnología"],
        creationDate: "2025-02-25"
    },
    {
        id: 3,
        name: "Reconocimiento Facial",
        description: "Implementación avanzada de reconocimiento facial en tiempo real.",
        status: "fuego",
        progress: 85,
        dueDate: "2025-05-01",
        image: "images/projects/facial.webp",
        tags: ["Seguridad", "IA", "Reconocimiento Facial"],
        creationDate: "2025-01-18"
    },
    {
        id: 4,
        name: "Red Social Universitaria",
        description: "Desarrollo de una red social para conectar estudiantes y profesores.",
        status: "standby",
        progress: 30,
        dueDate: "2025-07-10",
        image: "images/projects/red-social.webp",
        tags: ["Red Social", "Educación", "Conexión"],
        creationDate: "2025-03-12"
    },
    {
        id: 5,
        name: "Simulación de Robots Autónomos",
        description: "Proyecto exitoso sobre simulación de robots con IA.",
        status: "terminado",
        progress: 100,
        dueDate: "2025-03-15",
        image: "images/projects/robots.webp",
        tags: ["Robots", "IA", "Automatización"],
        creationDate: "2024-12-05"
    },
    {
        id: 6,
        name: "Aplicación de Control de Hábitos",
        description: "Propuesta de una app para ayudar a formar hábitos saludables.",
        status: "bocetando",
        progress: 5,
        dueDate: "2025-08-20",
        image: "images/projects/habitos.webp",
        tags: ["Salud", "Bienestar", "Aplicaciones"],
        creationDate: "2024-11-22"
    },
    {
        id: 7,
        name: "Video Streaming",
        description: "Desarrollo de una plataforma de streaming para contenido educativo.",
        status: "marcha",
        progress: 40,
        dueDate: "2025-07-30",
        image: "images/projects/streaming.webp",
        tags: ["Tecnología", "Educación", "Software"],
        creationDate: "2025-01-01"
    },
    {
        id: 8,
        name: "Generación Automática de Música",
        description: "Proyecto para la creación de música usando inteligencia artificial.",
        status: "fuego",
        progress: 75,
        dueDate: "2025-05-15",
        image: "images/projects/musica.webp",
        tags: ["IA", "Arte", "Innovación"],
        creationDate: "2024-08-30"
    },
    {
        id: 9,
        name: "Aplicación de Telemedicina",
        description: "Desarrollo de una app para consultas médicas a distancia.",
        status: "despegando",
        progress: 20,
        dueDate: "2025-06-12",
        image: "images/projects/telemedicina.webp",
        tags: ["Salud", "Tecnología", "Aplicaciones"],
        creationDate: "2025-02-05"
    },
    {
        id: 10,
        name: "Automatización de Tareas Empresariales",
        description: "Sistema para automatizar tareas administrativas en empresas.",
        status: "bocetando",
        progress: 10,
        dueDate: "2025-10-01",
        image: "images/projects/automatizacion.webp",
        tags: ["Software", "Tecnología", "Automatización"],
        creationDate: "2024-12-08"
    },
    {
        id: 11,
        name: "Reconocimiento de Patrones en Imágenes Médicas",
        description: "Aplicación de IA para detectar patrones en imágenes médicas.",
        status: "marcha",
        progress: 55,
        dueDate: "2025-06-05",
        image: "images/projects/patrones.webp",
        tags: ["IA", "Salud", "Tecnología"],
        creationDate: "2025-02-02"
    },
    {
        id: 12,
        name: "Videojuego Educativo de Realidad Aumentada",
        description: "Desarrollo de un videojuego educativo usando realidad aumentada.",
        status: "standby",
        progress: 15,
        dueDate: "2025-09-30",
        image: "images/projects/videojuego.webp",
        tags: ["Educación", "Tecnología", "Realidad Aumentada"],
        creationDate: "2025-03-15"
    },
    {
        id: 13,
        name: "Entrenamiento Personalizado",
        description: "Desarrollo de una app para entrenamientos personalizados con IA.",
        status: "terminado",
        progress: 100,
        dueDate: "2025-02-28",
        image: "images/projects/entrenamiento.webp",
        tags: ["Salud", "IA", "Bienestar"],
        creationDate: "2024-10-20"
    },
    {
        id: 14,
        name: "Plataforma de Aprendizaje de Lenguas",
        description: "Plataforma online para aprender nuevos idiomas con IA.",
        status: "bocetando",
        progress: 8,
        dueDate: "2025-12-15",
        image: "images/projects/lenguas.webp",
        tags: ["Educación", "Tecnología", "IA"],
        creationDate: "2024-11-12"
    },
    {
        id: 15,
        name: "Robot de Limpieza Inteligente",
        description: "Desarrollo de un robot autónomo para limpieza doméstica.",
        status: "fuego",
        progress: 90,
        dueDate: "2025-05-25",
        image: "images/projects/robot-limpieza.webp",
        tags: ["Robots", "Tecnología", "Automatización"],
        creationDate: "2025-01-20"
    },
    {
        id: 16,
        name: "Sistema de Detección de Fraude Financiero",
        description: "Plataforma que usa IA para detectar fraudes financieros.",
        status: "marcha",
        progress: 60,
        dueDate: "2025-08-10",
        image: "images/projects/fraude.webp",
        tags: ["IA", "Finanzas", "Tecnología"],
        creationDate: "2025-02-15"
    },
    {
        id: 17,
        name: "Desarrollo de un Drone Autónomo",
        description: "Creación de un drone autónomo para transporte de mercancías.",
        status: "despegando",
        progress: 25,
        dueDate: "2025-07-15",
        image: "images/projects/drone.webp",
        tags: ["Tecnología", "Innovación", "Robots"],
        creationDate: "2024-12-10"
    }
];

// Función para cargar el contenededor de proyectos
const projectsContainer = document.querySelector(".row.g-4");

// Funcion para formatear la fecha
function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`; // Convierte YYYY-MM-DD a DD/MM/YYYY
}

// Funcion para renderizar un proyecto
function renderProjects() {
    // Obtener los proyectos almacenados en localStorage
    let storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    // Si no hay proyectos almacenados, se cargan los proyectos por defecto
    if (storedProjects.length === 0) {
        storedProjects = [...defaultProjects];
        localStorage.setItem("projects", JSON.stringify(storedProjects));
    }

    // Limpiar el contenedor de proyectos antes de renderizar
    projectsContainer.innerHTML = "";

    // Recorrer los proyectos y renderizarlos
    storedProjects.forEach((project, projectIndex) => {
        // Compara la fecha de entrega con la fecha prevista
        const dateLabel = (project.status === "terminado" && project.progress === 100) ? "Fecha de Entrega" : "Fecha Prevista";

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
                    badgeClass = 'badge-innovation';
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
            <div class="project-card card h-100" >
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
                        <small class="text-muted">${dateLabel}: ${formatDate(project.dueDate)}</small><br>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">Fecha de inicio: ${formatDate(project.creationDate)}</small>
                    </div>
                    <div class="mt-3 text-end">
                        <a href="../project.html?id=${project.id}" class="text-primary text-decoration-none small">
                            <span class="fst-italic">Ver detalles</span>
                            <i class="fas fa-chevron-right ms-1 fs-6"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}

// Función para validar URL de una imagen
function isValidUrl(url) {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    return regex.test(url);
}

// Funcion para agregar un nuevo proyecto
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

    // Inicializar etiquetas seleccionadas
    let selectedTags = [];
    const availableTags = ["Tecnología", "Ciencia", "Arte", "Innovación", "Salud", "Educación", "Software", "Hardware", "IA"];

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
        let creationDate = document.querySelector("#creationDate").value;
        const status = document.querySelector("#projectStatus").value;
        const imageUrl = document.querySelector("#projectImage").value.trim();

        // Validar campos requeridos
        if (!name || !description || !status) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Asignar progreso según el estado
        let progress;
        switch (status) {
            case "despegando": progress = 10; break;
            case "marcha": progress = 50; break;
            case "fuego": progress = 85; break;
            case "standby": progress = 30; break;
            case "terminado": progress = 100; break;
            case "bocetando": progress = 5; break;
            default: progress = 0;
        }

        // Validar fecha de entrega y fecha de creación
        if (!dueDate) {
            const currentDate = new Date();
            currentDate.setMonth(currentDate.getMonth() + 6);
            dueDate = currentDate.toLocaleDateString("es-ES");
        }

        if (!creationDate) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - 0);
            creationDate = currentDate.toLocaleDateString("es-ES");
        }

        // Validar URL de imagen
        let image = "images/projects/default.webp";
        if (imageUrl && isValidUrl(imageUrl)) {
            image = imageUrl;
        }

        let storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        if (storedProjects.length === 0) {
            storedProjects = [...defaultProjects];
        }

        // Guardar el nuevo proyecto
        storedProjects.push({
            name,
            description,
            status,
            progress,
            dueDate: new Date(dueDate).toISOString().split("T")[0],
            creationDate: new Date(creationDate).toISOString().split("T")[0],
            image,
            tags: [...selectedTags]
        });

        // Guardar en localStorage
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

// Filtrar proyectos
// Agrega un evento de cambio a los filtros
document.getElementById('statusFilter').addEventListener('change', filterProjects);
document.getElementById('projectTags').addEventListener('input', filterProjects);
document.getElementById('searchFilter').addEventListener('input', filterProjects);
document.getElementById('sortFilter').addEventListener('change', filterProjects);

// Función para filtrar proyectos
function filterProjects() {
    // Obtener valores de los filtros
    const status = document.getElementById('statusFilter').value.toLowerCase();
    const member = document.getElementById('projectTags').value.toLowerCase();
    const search = document.getElementById('searchFilter').value.toLowerCase();
    const sortBy = document.getElementById('sortFilter').value.toLowerCase();

    // Obtener los proyectos almacenados en localStorage
    let storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    if (storedProjects.length === 0) {
        storedProjects = [...defaultProjects];
        localStorage.setItem("projects", JSON.stringify(storedProjects));
    }

    // Filtrar proyectos
    const filteredProjects = storedProjects.filter(project => {
        const projectStatus = project.status.toLowerCase();
        const projectContent = project.description.toLowerCase();
        const projectTitle = project.name.toLowerCase();
        const projectTags = project.tags.map(tag => tag.toLowerCase());

        const statusMatch = !status || projectStatus.includes(status);
        const memberMatch = !member || projectTags.some(tag => tag.includes(member));
        const searchMatch = !search || projectContent.includes(search) || projectTitle.includes(search);

        return statusMatch && memberMatch && searchMatch;
    });

    // Ordenar proyectos si se ha seleccionado un criterio
    if (sortBy) {
        const [key, order] = sortBy.split("-");

        filteredProjects.sort((a, b) => {
            let result = 0;

            if (key === "vencimiento") {
                result = new Date(a.dueDate) - new Date(b.dueDate);
            } else if (key === "creacion") {
                result = new Date(a.creationDate) - new Date(b.creationDate);
            } else if (key === "progreso") {
                result = a.progress - b.progress;
            } else if (key === "nombre") {
                result = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            } else if (key === "estado") {
                result = a.status.toLowerCase().localeCompare(b.status.toLowerCase());
            }

            return order === "desc" ? -result : result; // Si es "desc", invierte el orden
        });
    }

    // Actualizar la vista con los proyectos filtrados y ordenados
    projectsContainer.innerHTML = '';
    filteredProjects.forEach((project, projectIndex) => {
        // Renderizar cada proyecto como lo haces en renderProjects()
        const projectHTML = `
            <div href class="col-md-6 col-lg-4">
                <div class="project-card card h-100" onclick="window.location.href='../project.html?id=${project.id}'">
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
                        <div class="d-flex flex-wrap mb-2">
                            ${project.tags.map((tag, tagIndex) => `<span class="badge badge-pill ${getTagClass(tag)} me-2">${tag}</span>`).join('')}
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${getStatusDateLabel(project)}: ${formatDate(project.dueDate)}</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">Fecha de inicio: ${formatDate(project.creationDate)}</small>
                        </div>
                        <div class="mt-3 text-end">
                            <a href="../project.html?id=${project.id}" class="text-primary text-decoration-none small">
                                <span class="fst-italic">Ver detalles</span>
                                <i class="fas fa-chevron-right ms-1 fs-6"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}

// Funcion para obtener la clase de la etiqueta
function getTagClass(tag) {
    switch (tag.toLowerCase()) {
        case 'tecnología': return 'badge-tech';
        case 'ciencias': return 'badge-science';
        case 'arte': return 'badge-art';
        case 'innovación': return 'badge-innovation';
        case 'salud': return 'badge-health';
        case 'educación': return 'badge-edu';
        case 'software': return 'badge-soft';
        case 'hardware': return 'badge-hard';
        case 'ia': return 'badge-ai';
        default: return 'badge-general';
    }
}

// Funcion que determina el estado del proyecto
function getStatusDateLabel(project) {
    return (project.status === "terminado" && project.progress === 100) ? "Fecha de Entrega" : "Fecha Prevista";
}