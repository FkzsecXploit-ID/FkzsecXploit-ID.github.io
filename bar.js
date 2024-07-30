document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
});