(function() {
    function getLoadTime() {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      return loadTime;
    }
    function displayStats() {
      const loadTime = getLoadTime();
    
      const statsContainer = document.createElement('div');
      statsContainer.classList.add('stats-container');
    
      statsContainer.innerHTML = `Страница загружена за: ${loadTime} мс`;
    
      document.body.appendChild(statsContainer);
    }
  
    window.addEventListener('load', function() {
      displayStats();
    });
  })();

