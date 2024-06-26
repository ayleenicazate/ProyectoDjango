document.addEventListener('DOMContentLoaded', function() {
    function generarNavbar(isAuthenticated) {
        // Crear el elemento navbar
        var navbar = document.getElementById('navbar');
        navbar.className = 'navbar navbar-expand-md navbar-dark bg-steel fixed-top';

        // Crear el contenedor
        var container = document.createElement('div');
        container.className = 'container';

        // Crear el enlace de la marca
        var brandLink = document.createElement('a');
        brandLink.className = 'navbar-brand';
        brandLink.href = '/';  // URL de inicio

        // Crear el icono SVG
        var svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("style", "padding-right: 10px");
        svgIcon.setAttribute("height", "32");
        svgIcon.setAttribute("viewBox", "0 0 512 512");
        svgIcon.setAttribute("width", "32");
        svgIcon.setAttributeNS(null, "id", "Capa_1");
        svgIcon.setAttributeNS(null, "enable-background", "new 0 0 512 512");

        // Insertar contenido SVG aquí (Ejemplo)
        var g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        var g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "m512 45c0-24.853-20.147-45-45-45h-422c-24.853 0-45 20.147-45 45v90c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15z");
        path.setAttribute("fill", "#7d81e7");
        g2.appendChild(path);
        g1.appendChild(g2);
        svgIcon.appendChild(g1);

        brandLink.appendChild(svgIcon);
        brandLink.appendChild(document.createTextNode("Django Blog"));

        // Elementos de la barra de navegación
        var navList = document.createElement('div');
        navList.className = 'navbar-nav mr-auto';

        var navItems = [
            { text: 'HOME', url: '/home/' },
            { text: 'ABOUT', url: '/about/' },
            { text: 'SHOP', url: '/shop/' }
        ];

        navItems.forEach(function(item) {
            var navLink = document.createElement('a');
            navLink.className = 'nav-item nav-link';
            navLink.href = item.url;
            navLink.textContent = item.text;
            navList.appendChild(navLink);
        });

        // Elementos de autenticación
        var authList = document.createElement('div');
        authList.className = 'navbar-nav';

        if (isAuthenticated) {
            var authLinks = [
                { text: 'Crear Post', url: '/new-post/' },
                { text: 'Perfil', url: '/profile/' },
                { text: 'Salir', url: '/login/' }
            ];

            authLinks.forEach(function(link) {
                var authLink = document.createElement('a');
                authLink.href = link.url;
                authLink.className = 'nav-item nav-link';
                authLink.textContent = link.text;
                authList.appendChild(authLink);
            });
        } else {
            var loginLink = document.createElement('a');
            loginLink.href = '/login/';
            loginLink.className = 'nav-item nav-link';
            loginLink.textContent = 'Login';
            authList.appendChild(loginLink);

            var registerLink = document.createElement('a');
            registerLink.href = '/register/';
            registerLink.className = 'nav-item nav-link';
            registerLink.textContent = 'Regístrate';
            authList.appendChild(registerLink);
        }

        // Agregar todos los elementos al contenedor
        container.appendChild(brandLink);
        container.appendChild(navList);
        container.appendChild(authList);

        // Agregar el contenedor al navbar
        navbar.appendChild(container);
    }

    // Llamar a la función para generar el navbar
    // Pasar true o false según el estado de autenticación del usuario
    generarNavbar(true); // Asume que el usuario está autenticado, cambiar a false si no lo está
});