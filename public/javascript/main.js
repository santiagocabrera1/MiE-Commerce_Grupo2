document.addEventListener("DOMContentLoaded", function() {

const navButton = document.querySelector('#perfil-btn');
const sidebarButton = document.querySelector('#sidebar-btn');
const sidebar = document.querySelector('.sidebar');



navButton.addEventListener('click', () => {
    if (sidebar.classList.contains('opened')){
        sidebar.classList.remove('opened');
    } else {
        sidebar.classList.add('opened');
    }
});

sidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('opened');
});

});
