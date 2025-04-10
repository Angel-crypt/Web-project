// Este script se encarga de cargar los componentes de la navbar y el footer en las páginas HTML.
fetch('/components/navbar.html')
    // Ejecuta una solicitud GET para obtener el contenido del archivo navbar.html
    .then(res => res.text())
    // Convierte la respuesta a texto
    .then(data => {
        // Inserta el contenido del archivo navbar.html en el elemento con id 'navbar'
        document.getElementById('navbar').innerHTML = data;

        // Esperamos un ciclo de renderizado para asegurarnos que los elementos están en el DOM
        requestAnimationFrame(() => {
            const currentPage = window.location.pathname.split('/').pop(); // e.g. 'test.html'
            const navLinks = document.querySelectorAll('.navbar .nav-link');

            // Recorremos todos los enlaces de la navbar
            navLinks.forEach(link => {
                // Obtenemos el atributo href de cada enlace
                const href = link.getAttribute('href');

                // Verifica que href exista y no sea solo "#"
                if (href && href !== "#" && currentPage === href) {
                    link.classList.add('active');
                }
            });
        });
    });

// Carga el contenido del footer.html en el elemento con id 'footer'
fetch('/components/footer.html')
    // Ejecuta una solicitud GET para obtener el contenido del archivo footer.html
    .then(res => res.text())
    // Convierte la respuesta a texto
    .then(data => {
        // Inserta el contenido del archivo footer.html en el elemento con id 'footer'
        document.getElementById('footer').innerHTML = data;
    });