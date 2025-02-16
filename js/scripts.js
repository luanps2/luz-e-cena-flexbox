//*menu hamburguer*/

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu__toggle__icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.createElement('div');
    
    overlay.classList.add('mobile-menu-overlay');
    document.body.appendChild(overlay);
  
    // Abrir/Fechar menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  
    // Fechar ao clicar no overlay
    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    // Fechar ao clicar em um link (opcional)
    document.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  });

  
//dark mode
function darkMode() {
    const pagina = document.body;
    const logo = document.getElementById("logo");
    const darkModeIcon = document.getElementById("darkMode");
    
    // Usamos contains para verificar o estado atual
    const isDarkMode = pagina.classList.toggle("dark-mode");
    
    // Toggle usando operador ternário
    logo.src = isDarkMode ? "./images/Logo-white.svg" : "./images/Logo.svg";
    darkModeIcon.src = isDarkMode ? "./images/sun.svg" : "./images/moon.svg";
}
