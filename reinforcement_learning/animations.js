document.addEventListener('DOMContentLoaded', function() {
    // Hero animation
    const agent = document.getElementById('agent');
    const reward = document.getElementById('reward');
    const environment = document.getElementById('environment');
    
    function setupHeroAnimation() {
        const envWidth = environment.offsetWidth;
        const envHeight = environment.offsetHeight;
        
        // Place reward at a random position
        const rewardX = Math.random() * (envWidth - 100) + 50;
        const rewardY = Math.random() * (envHeight - 100) + 50;
        
        reward.style.left = `${rewardX}px`;
        reward.style.top = `${rewardY}px`;
        reward.style.opacity = '1';
        
        // Place agent at a random position away from reward
        let agentX, agentY;
        do {
            agentX = Math.random() * (envWidth - 100) + 50;
            agentY = Math.random() * (envHeight - 100) + 50;
        } while (
            Math.abs(agentX - rewardX) < 100 &&
            Math.abs(agentY - rewardY) < 100
        );
        
        agent.style.left = `${agentX}px`;
        agent.style.top = `${agentY}px`;
        
        return { agentX, agentY, rewardX, rewardY };
    }
    
    function moveAgentToReward(startX, startY, targetX, targetY) {
        const distance = Math.sqrt(
            Math.pow(targetX - startX, 2) + 
            Math.pow(targetY - startY, 2)
        );
        
        const duration = distance / 100; // Adjust speed based on distance
        
        // Animate the agent movement
        let startTime = null;
        
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsedTime = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsedTime / duration, 1);
            
            const currentX = startX + (targetX - startX) * progress;
            const currentY = startY + (targetY - startY) * progress;
            
            agent.style.left = `${currentX}px`;
            agent.style.top = `${currentY}px`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Reached the reward
                reward.style.opacity = '0';
                setTimeout(() => {
                    runHeroAnimation();
                }, 1000);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    function runHeroAnimation() {
        const { agentX, agentY, rewardX, rewardY } = setupHeroAnimation();
        setTimeout(() => {
            moveAgentToReward(agentX, agentY, rewardX, rewardY);
        }, 1000);
    }
    
    // Start the hero animation after a short delay
    setTimeout(runHeroAnimation, 1000);
    
    // Learning cycle animation
    const agentNode = document.getElementById('agent-node');
    const environmentNode = document.getElementById('environment-node');
    const actionArrow = document.getElementById('action-arrow');
    const rewardArrow = document.getElementById('reward-arrow');
    
    function animateLearningCycle() {
        // Define the sequence of animations
        const sequence = [
            {
                element: agentNode,
                style: 'filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.8)); transform: scale(1.05);'
            },
            {
                element: actionArrow,
                style: 'filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.8)); opacity: 1;'
            },
            {
                element: environmentNode,
                style: 'filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.8)); transform: scale(1.05);'
            },
            {
                element: rewardArrow,
                style: 'filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.8)); opacity: 1;'
            }
        ];
        
        // Reset all styles
        sequence.forEach(item => {
            item.element.setAttribute('style', '');
        });
        
        // Execute the sequence with delays
        sequence.forEach((item, index) => {
            setTimeout(() => {
                item.element.setAttribute('style', item.style);
            }, index * 700);
            
            // Reset style after a delay
            setTimeout(() => {
                item.element.setAttribute('style', '');
            }, index * 700 + 500);
        });
    }
    
    // Run the cycle animation periodically
    setInterval(animateLearningCycle, 3500);
});
