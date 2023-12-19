(function() {
    function getLoadTime() {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      return loadTime;
    }
    function displayStats() {
      const loadTime = getLoadTime();

      const statsContainer = document.createElement('div');
      statsContainer.style.position = 'fixed';
      statsContainer.style.bottom = '0';
      statsContainer.style.left = '0';
      statsContainer.style.backgroundColor = '#f0f0f0';
      statsContainer.style.padding = '10px';
      statsContainer.style.fontFamily = 'Arial, sans-serif';
      statsContainer.innerHTML = `Страница загружена за: ${loadTime} мс`;

      document.body.appendChild(statsContainer);
    }
  
    window.addEventListener('load', function() {
      displayStats();
    });
  })();

