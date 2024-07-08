document.addEventListener('DOMContentLoaded', function() {
    function generarFooter() {
        // Crear el elemento footer
        var footer = document.createElement('footer');
        footer.className = ''; // Agrega las clases necesarias aquí

        // Crear la lista de navegación
        var navList = document.createElement('ul');
        navList.className = 'nav justify-content-center border-bottom';
        navList.style.marginTop = '60px';

        // Array con los enlaces
        var enlaces = [
            { text: 'Home', url: '/home/' },
            { text: 'Admin', url: '/admin/' },
            { text: 'About', url: '/about/' }
        ];

        // Crear y agregar los elementos de la lista
        enlaces.forEach(function(enlace) {
            var listItem = document.createElement('li');
            listItem.className = 'nav-item';

            var link = document.createElement('a');
            link.href = enlace.url;
            link.className = 'nav-link px-2 text-muted';
            link.textContent = enlace.text;

            listItem.appendChild(link);
            navList.appendChild(listItem);
        });

        // Agregar la lista al footer
        footer.appendChild(navList);

        // Crear y agregar el texto de derechos de autor
        var copyrightText = document.createElement('p');
        copyrightText.className = 'text-center text-muted';
        copyrightText.textContent = '© ❤️️ DevWithLove ❤️️';

        footer.appendChild(copyrightText);

        // Agregar el footer al final del body
        document.body.appendChild(footer);
    }

    // Llamar a la función para generar el footer en todas las páginas
    generarFooter();
});