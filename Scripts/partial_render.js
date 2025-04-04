fetch('/partials/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Esperamos un ciclo de renderizado para asegurarnos que los elementos están en el DOM
        requestAnimationFrame(() => {
            const currentPage = window.location.pathname.split('/').pop(); // e.g. 'test.html'
            const navLinks = document.querySelectorAll('.navbar .nav-link');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');

                // Verifica que href exista y no sea solo "#"
                if (href && href !== "#" && currentPage === href) {
                    link.classList.add('active');
                }
            });
        });
    });

    
fetch('/partials/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });