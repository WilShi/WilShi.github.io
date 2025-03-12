document.addEventListener('DOMContentLoaded', function() {
    // Initialize Icons
    lucide.createIcons();
    
    // Exploration vs Exploitation slider
    const slider = document.getElementById('explore-exploit-slider');
    const sliderValue = document.getElementById('slider-value');
    const visualContainer = document.getElementById('explore-exploit-visual');
    
    function updateExploitationVisualization() {
        const explorationRate = parseInt(slider.value);
        sliderValue.textContent = `${explorationRate}%`;
        
        // Update visualization
        visualContainer.innerHTML = '';
        const totalTiles = 30;
        const exploreTiles = Math.floor((totalTiles * explorationRate) / 100);
        const exploitTiles = totalTiles - exploreTiles;
        
        for (let i = 0; i < exploreTiles; i++) {
            const tile = document.createElement('div');
            tile.className = 'w-5 h-5 rounded-sm bg-blue-100 transition-all';
            visualContainer.appendChild(tile);
        }
        
        for (let i = 0; i < exploitTiles; i++) {
            const tile = document.createElement('div');
            tile.className = 'w-5 h-5 rounded-sm bg-green-100 transition-all';
            visualContainer.appendChild(tile);
        }
        
        // Highlight a random tile to show current choice
        const randomIndex = Math.floor(Math.random() * totalTiles);
        const tiles = visualContainer.querySelectorAll('div');
        if (tiles[randomIndex]) {
            if (randomIndex < exploreTiles) {
                tiles[randomIndex].className = 'w-5 h-5 rounded-sm bg-blue-500 transform scale-110 transition-all';
            } else {
                tiles[randomIndex].className = 'w-5 h-5 rounded-sm bg-green-500 transform scale-110 transition-all';
            }
        }
    }
    
    slider.addEventListener('input', updateExploitationVisualization);
    updateExploitationVisualization();
    
    // Periodically update the exploration visualization
    setInterval(updateExploitationVisualization, 1500);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
