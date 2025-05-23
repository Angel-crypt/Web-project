// Script para cargar los detalles del proyecto desde un archivo JSON y mostrarlo en la página
async function loadProjectDetails(projectId) {
    try {
        const response = await fetch('../Documents/projects.json');
        const projects = await response.json(); // Cargar los proyectos desde el archivo JSON
        const project = projects.find(p => p.id === projectId); // Buscar el proyecto por ID
        // Verificar si el proyecto existe
        if (project) {
            // Renderizar los detalles del proyecto en el contenedor correspondiente
            document.getElementById('projectDetailsContainer').innerHTML = `
                <!-- Header y breadcrumb mejorados -->
                <div class="row mb-4">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-light p-2 rounded shadow-sm">
                                <li class="breadcrumb-item">
                                    <a href="projects.html" class="text-decoration-none">Proyectos</a>
                                </li>
                                <li class="breadcrumb-item active fw-medium">/ ${project.name}</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <!-- Encabezado del proyecto con estilo mejorado -->
                <div class="row mb-4 align-items-center">
                    <div class="col-lg-8">
                        <h1 class="project-title display-6 fw-bold mb-2">${project.name}</h1>
                        <div class="project-meta d-flex flex-wrap align-items-center">
                            <span class="badge ${project.status} fw-medium p-2 me-3">${getStatusEmoji(project.status)} ${formatStatus(project.status)}</span>
                            <span class="text-muted me-3"><i class="bi bi-calendar3 me-1"></i> Inicio: ${project.startDate}</span>
                            <span class="text-muted"><i class="bi bi-calendar-check me-1"></i> Entrega: ${project.dueDate}</span>
                        </div>
                    </div>
                    <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                        <button class="btn btn-outline-primary me-2 shadow-sm favorite-btn" id="favoriteButton" onclick="toggleFavorite(${project.id})">
                            <i class="bi bi-star" id="favoriteIcon"></i>
                        </button>
                        <div class="dropdown d-inline-block">
                            <button class="btn btn-primary shadow-sm dropdown-toggle" type="button" id="shareButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-share-fill me-1"></i> Compartir
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="shareButton">
                                <li><a class="dropdown-item" href="#" onclick="shareProject('email', ${project.id})"><i class="bi bi-envelope me-2 text-secondary"></i>Correo electrónico</a></li>
                                <li><a class="dropdown-item" href="#" onclick="shareProject('whatsapp', ${project.id})"><i class="bi bi-whatsapp me-2 text-success"></i>WhatsApp</a></li>
                                <li><a class="dropdown-item" href="#" onclick="shareProject('telegram', ${project.id})"><i class="bi bi-telegram me-2 text-primary"></i>Telegram</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#" onclick="copyProjectLink(${project.id})"><i class="bi bi-link-45deg me-2 text-info"></i>Copiar enlace</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Contenido principal con tarjetas mejoradas -->
                <div class="row g-4">
                    <!-- Columna principal -->
                    <div class="col-lg-8">
                        <!-- Resumen del proyecto -->
                        <div class="card mb-4 shadow-sm border-0 rounded-3">
                            <div class="card-header bg-white border-bottom border-2 py-3">
                                <h2 class="card-title h4 m-0"><i class="bi bi-info-circle me-2 text-primary"></i>Resumen del Proyecto</h2>
                            </div>
                            <div class="card-body">
                                <p class="card-text lead">${project.description}</p>
                                
                                <!-- Galería de imágenes mejorada -->
                                <div class="project-gallery mb-4 mt-4">
                                    <div class="row g-3">
                                        ${project.images.map((img, index) => `
                                            <div class="col-md-6 position-relative">
                                                <img src="${img}" class="img-fluid rounded-3 shadow-sm img-large" alt="Imagen del proyecto">
                                                ${index === project.images.length - 1 ? `
                                                    <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 text-white rounded-3">
                                                        <span class="fw-bold">Ver más</span>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <!-- Características con iconos -->
                                <div class="project-details mt-4">
                                    <h3 class="h5 fw-bold mb-3"><i class="bi bi-check2-circle me-2 text-success"></i>Características clave</h3>
                                    <ul class="list-group list-group-flush">
                                        ${project.features.map(feature => `
                                            <li class="list-group-item ps-0 border-0 d-flex align-items-center">
                                                <i class="icon-per bi bi-check-lg text-success me-2"></i>${feature}
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Sección de Documentos -->
                        <div class="card mb-4 shadow-sm border-0 rounded-3">
                            <div class="card-header bg-white border-bottom border-2 py-3">
                                <h2 class="card-title h4 m-0"><i class="bi bi-file-earmark-text me-2 text-primary"></i>Documentos</h2>
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    ${project.documents.map(doc => `
                                        <a href="${doc.link}" download="${doc.name}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 border-bottom py-3 px-0">
                                            <div>
                                                <i class="${doc.icon} me-2 icon-per"></i>
                                                <span class="fw-medium">${doc.name}</span>
                                            </div>
                                            <span class="badge icon-per">${doc.size}</span>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Sección de Progreso -->
                        <div class="card shadow-sm border-0 rounded-3">
                            <div class="card-header bg-white border-bottom border-2 py-3">
                                <h2 class="card-title h4 m-0"><i class="bi bi-graph-up me-2 text-primary"></i>Progreso</h2>
                            </div>
                            <div class="card-body">
                                <div class="progress mb-3" style="height: 10px;">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: ${project.progress}%" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="text-end mb-4">
                                    <span class="fw-bold text-success percentage">${project.progress}% completado</span>
                                </div>
                                
                                <div class="milestones mt-4">
                                    <h3 class="h5 fw-bold mb-3"><i class="bi bi-flag-fill me-2 text-success"></i>Hitos recientes</h3>
                                    ${project.milestones.map(milestone => `
                                        <div class="milestone-item d-flex align-items-center mb-3 p-2 bg-light rounded">
                                            <i class="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                                            <span class="fw-medium">${milestone}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Columna lateral -->
                    <div class="col-lg-4">
                        <!-- Equipo -->
                        <div class="card mb-4 shadow-sm border-0 rounded-3">
                            <div class="card-header bg-white border-bottom border-2 py-3">
                                <h2 class="card-title h4 m-0"><i class="bi bi-people me-2 text-primary"></i>Equipo</h2>
                            </div>
                            <div class="card-body">
                                <div class="team-members">
                                    ${project.teamMembers.map((member, index) => `
                                        <div class="team-member d-flex align-items-center ${index !== project.teamMembers.length - 1 ? 'mb-3 pb-3 border-bottom' : ''}">
                                            <div class="bg-light rounded-circle p-2 me-3 text-primary">
                                                <i class="bi bi-person-fill fs-5"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-0 fw-bold">${member.name}</h6>
                                                <small class="text-muted">${member.role}</small>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Estadísticas -->
                        <div class="card mb-4 shadow-sm border-0 rounded-3">
                            <div class="card-header bg-white border-bottom border-2 py-3">
                                <h2 class="card-title h4 m-0"><i class="bi bi-bar-chart me-2 text-primary"></i>Estadísticas</h2>
                            </div>
                            <div class="card-body">
                                <div class="stats-item d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="fw-medium"><i class="bi bi-check2-all me-2 text-success"></i>Tareas completadas</span>
                                    <span class="badge bg-success shadow-sm">${project.tasksCompleted}/${project.totalTasks}</span>
                                </div>
                                <div class="stats-item d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="fw-medium"><i class="bi bi-clock-history me-2 text-info"></i>Horas registradas</span>
                                    <span class="badge bg-info shadow-sm">${project.hoursLogged}</span>
                                </div>
                                <div class="stats-item d-flex justify-content-between">
                                    <span class="fw-medium"><i class="bi bi-people-fill me-2 text-primary"></i>Miembros</span>
                                    <span class="badge bg-primary shadow-sm members-count">${project.teamMembers.length}</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Cronología -->
                        <div class="card shadow-sm border-0 rounded-3">
                            <div class="card-header bg-white border-bottom border-2 py-3">
                                <h2 class="card-title h4 m-0"><i class="bi bi-calendar-week me-2 text-primary"></i>Cronología</h2>
                            </div>
                            <div class="card-body">
                                <div class="timeline">
                                    ${project.timeline.map((event, index) => `
                                        <div class="timeline-item ${index !== project.timeline.length - 1 ? 'border-start' : ''} border-2 ${getTimelineColor(index)} ps-3 ms-3 position-relative mb-3 pb-3">
                                            <div class="timeline-marker position-absolute start-0 top-0 translate-middle-x bg-white p-1 rounded-circle border border-2 ${getTimelineColor(index)}">
                                                <i class="bi bi-calendar-event-fill ${getTimelineColor(index)} small"></i>
                                            </div>
                                            <small class="text-muted d-block mb-1"><i class="bi bi-clock me-1"></i>${event.date}</small>
                                            <p class="mb-0 fw-medium">${event.description}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            checkFavoriteStatus(projectId); // Verificar si el proyecto está en favoritos
        } else {
            // Mostrar mensaje de error si no se encuentra el proyecto
            document.getElementById('projectDetailsContainer').innerHTML = '<p>Detalles del proyecto no disponibles.</p>';
        }
    } catch (error) {
        // Manejo de errores al cargar el archivo JSON
        console.error('Error al cargar los datos:', error);
    }
}

// Función para obtener el parámetro de la URL
function getQueryParam(param) {
    // Crear un objeto URLSearchParams para manejar los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    // Devolver el valor del parámetro especificado
    return urlParams.get(param);
}

// Cargar detalles del proyecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const projectId = getQueryParam('id'); // Obtener el ID del proyecto de la URL
    loadProjectDetails(projectId); // Cargar los detalles del proyecto
});

// Funciones auxiliares para el manejo de favoritos y compartir
function getTimelineColor(index) {
    // Devuelve una clase de color para la línea de tiempo basada en el índice
    const colors = ['border-primary text-primary', 'border-success text-success', 'border-info text-info', 'border-warning text-warning'];
    // Puedes agregar más colores según sea necesario
    return colors[index % colors.length];
}

// Función para alternar el estado de favorito
function toggleFavorite(projectId) {
    // Obtener favoritos del localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteProjects')) || [];
    // Verificar si el proyecto ya está en favoritos
    const index = favorites.indexOf(projectId);
    // Seleccionar el botón y el icono
    const favoriteBtn = document.getElementById('favoriteButton');
    // Seleccionar el icono del botón de favoritos
    const icon = document.getElementById('favoriteIcon');

    // Añadir clase para animación
    icon.classList.add('star-animate');

    // Quitar la clase de animación después de que termine
    setTimeout(() => {
        icon.classList.remove('star-animate');
    }, 500);

    // Añadir o quitar según el estado actual
    if (index === -1) {
        // Si no está en favoritos, añadirlo
        favorites.push(projectId);
        showNotification('Añadido a favoritos', 'El proyecto ha sido añadido a tus favoritos.');
        icon.classList.remove('bi-star');
        icon.classList.add('bi-star-fill');
        favoriteBtn.classList.add('active');
    } else {
        // Si ya está en favoritos, quitarlo
        favorites.splice(index, 1);
        showNotification('Eliminado de favoritos', 'El proyecto ha sido eliminado de tus favoritos.');
        icon.classList.remove('bi-star-fill');
        icon.classList.add('bi-star');
        favoriteBtn.classList.remove('active');
    }
    // Guardar en localStorage
    localStorage.setItem('favoriteProjects', JSON.stringify(favorites));
}

// Función para verificar el estado de favorito al cargar la página
function checkFavoriteStatus(projectId) {
    const favorites = JSON.parse(localStorage.getItem('favoriteProjects')) || [];
    const isFavorite = favorites.includes(projectId);

    // Actualizar la apariencia del botón según el estado
    updateFavoriteButton(isFavorite);
}

// Función para actualizar el botón de favoritos
function updateFavoriteButton(isFavorite) {
    const icon = document.getElementById('favoriteIcon');
    const favoriteBtn = document.getElementById('favoriteButton');

    if (isFavorite) {
        icon.classList.remove('bi-star');
        icon.classList.add('bi-star-fill');
        favoriteBtn.classList.add('active');
    } else {
        icon.classList.remove('bi-star-fill');
        icon.classList.add('bi-star');
        favoriteBtn.classList.remove('active');
    }
}

// Función para compartir el proyecto
function shareProject(platform, projectId) {
    let shareUrl = `https://example.com/project/${projectId}`; // URL del proyecto a compartir
    // Mensaje a compartir
    let message = `¡Mira este increíble proyecto en ProjectHub! 
    
                    Descúbrelo aquí: https://example.com/project/1
                    
                    ProjectHub es el lugar perfecto para estudiantes y profesionales que buscan gestionar sus proyectos de manera efectiva y colaborar sin barreras.

                    ¡Explora, comparte y crece con nosotros!
                    `;
    // Dependiendo de la plataforma seleccionada, se abrirá el enlace correspondiente
    switch (platform) {
        case 'email':
            window.location.href = `mailto:?subject=Proyecto&body=${message}`;
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=Proyecto`, '_blank');
            break;
        default:
            console.log('Plataforma no soportada');
    }
}

// Función para copiar el enlace del proyecto al portapapeles
function copyProjectLink(projectId) {
    // URL del proyecto a copiar
    const shareUrl = `https://example.com/project/${projectId}`; // Ajustar según la URL real del proyecto
    // Copiar al portapapeles
    navigator.clipboard.writeText(shareUrl).then(() => {
        // Mostrar notificación de éxito
        alert('Enlace copiado al portapapeles: ' + shareUrl);
    }).catch(err => {
        // Manejar errores al copiar
        console.error('Error al copiar el enlace: ', err);
    });
}

// Función para mostrar notificaciones
function showNotification(title, message) {
    // Mostrar notificación utilizando Bootstrap Toast
    const toast = document.getElementById('notificationToast');
    // Asegurarse de que el toast esté oculto antes de mostrarlo
    const toastTitle = document.getElementById('toastTitle');
    // Asegurarse de que el toast esté oculto antes de mostrarlo
    const toastMessage = document.getElementById('toastMessage');

    // Actualizar el contenido del toast
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}