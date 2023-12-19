(function () {
    const startTime = performance.now();

    window.addEventListener('load', function () {
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        console.log(`Страница загружена за ${loadTime.toFixed(2)} мс`);

        const currentPage = document.location.pathname.split('/').pop();
        const menuItems = document.querySelectorAll('nav ul li a');
        
        menuItems.forEach(item => {
            const itemPage = item.getAttribute('href').split('/').pop();
            if (itemPage === currentPage) {
                item.classList.add('active');
            }
        });
    });
})();
