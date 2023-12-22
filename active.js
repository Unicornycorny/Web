(function () {
    const startTime = performance.now();

    window.addEventListener('load', function () {
        const currentPage = window.location.href;
        const menuItems = document.querySelectorAll('nav ul li a');

        menuItems.forEach(item => {
            let itemPage = item.href;
            if (itemPage === currentPage) {
                item.classList.add('active');
            }
        });
    });
})();
