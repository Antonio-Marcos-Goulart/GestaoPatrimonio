document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    
    document.body.appendChild(menuToggle);
    document.body.appendChild(overlay);
    
    const sidebar = document.getElementById('sidebar');
    
    // Função para abrir/fechar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('sidebar-active');
        
        // Alterar ícone do botão
        if (sidebar.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
    
    // Fechar sidebar ao clicar em um link - funciona em telas menores
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
    });
    
    // Ativar link atual na sidebar
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Fechar sidebar ao estar em tela grande
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('sidebar-active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});