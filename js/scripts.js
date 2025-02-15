// Seleciona o ícone do menu hambúrguer e os links de navegação
const menuToggle = document.querySelector('.menu__toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Adiciona um evento de clique ao ícone do menu
menuToggle.addEventListener('click', () => {
    // Para cada link de navegação, alterna a visibilidade
    navLinks.forEach(link => {
        if (link.style.display === 'block') {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });
});