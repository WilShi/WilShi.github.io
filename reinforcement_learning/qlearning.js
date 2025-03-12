// Q-Learning algorithm implementation
class QLearning {
    constructor(actions, learningRate = 0.1, discountFactor = 0.9, explorationRate = 1.0) {
        this.actions = actions; // Available actions
        this.learningRate = learningRate; // Alpha
        this.discountFactor = discountFactor; // Gamma
        this.explorationRate = explorationRate; // Epsilon
        this.explorationDecay = 0.995; // Epsilon decay rate
        this.minExploration = 0.1; // Minimum exploration rate
        
        this.qTable = {}; // Q-table: state -> action -> value
        this.stats = {
            episodes: 0,
            steps: 0,
            totalReward: 0,
            successfulEpisodes: 0,
            episodeLengths: []
        };
    }
    
    getQValue(state, action) {
        if (!this.qTable[state]) {
            this.qTable[state] = Array(this.actions).fill(0);
        }
        return this.qTable[state][action];
    }
    
    chooseAction(state) {
        // Epsilon-greedy action selection
        if (Math.random() < this.explorationRate) {
            // Exploration: choose a random action
            return Math.floor(Math.random() * this.actions);
        } else {
            // Exploitation: choose the best action
            return this.getBestAction(state);
        }
    }
    
    getBestAction(state) {
        if (!this.qTable[state]) {
            this.qTable[state] = Array(this.actions).fill(0);
        }
        
        // Find the action with highest Q-value
        let bestAction = 0;
        let bestValue = this.qTable[state][0];
        
        for (let action = 1; action < this.actions; action++) {
            if (this.qTable[state][action] > bestValue) {
                bestValue = this.qTable[state][action];
                bestAction = action;
            }
        }
        
        return bestAction;
    }
    
    update(state, action, reward, nextState) {
        // Initialize if state not in Q-table
        if (!this.qTable[state]) {
            this.qTable[state] = Array(this.actions).fill(0);
        }
        
        // Initialize if next state not in Q-table
        if (!this.qTable[nextState]) {
            this.qTable[nextState] = Array(this.actions).fill(0);
        }
        
        // Get the current Q-value
        const currentQ = this.qTable[state][action];
        
        // Find the maximum Q-value for the next state
        const maxNextQ = Math.max(...this.qTable[nextState]);
        
        // Q-learning update formula
        const updatedQ = currentQ + this.learningRate * (
            reward + this.discountFactor * maxNextQ - currentQ
        );
        
        // Update the Q-value
        this.qTable[state][action] = updatedQ;
    }
    
    decayExploration() {
        this.explorationRate = Math.max(
            this.minExploration,
            this.explorationRate * this.explorationDecay
        );
    }
    
    getOptimalPath(startState, environment) {
        // Find the optimal path from start state to goal
        let currentState = startState;
        let path = [];
        let maxSteps = 100; // Prevent infinite loops
        
        let coords = currentState.split(',').map(Number);
        path.push({ x: coords[0], y: coords[1] });
        
        for (let step = 0; step < maxSteps; step++) {
            const action = this.getBestAction(currentState);
            
            // Simulate the environment's response to this action
            const { x: currentX, y: currentY } = path[path.length - 1];
            
            let nextX = currentX;
            let nextY = currentY;
            
            switch (action) {
                case 0: nextY--; break; // Up
                case 1: nextX++; break; // Right
                case 2: nextY++; break; // Down
                case 3: nextX--; break; // Left
            }
            
            // Check if the move is valid in the environment
            if (environment.isValidMove(nextX, nextY)) {
                path.push({ x: nextX, y: nextY });
                currentState = `${nextX},${nextY}`;
                
                // Check if reached the goal
                if (nextX === environment.goalPos.x && nextY === environment.goalPos.y) {
                    break;
                }
            } else {
                // Invalid move, try another action
                continue;
            }
        }
        
        return path;
    }
    
    getQValues() {
        return this.qTable;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // UI Elements
    const btnReset = document.getElementById('btn-reset');
    const btnTrain = document.getElementById('btn-train');
    const speedSlider = document.getElementById('speed-slider');
    const episodeCount = document.getElementById('episode-count');
    const stepCount = document.getElementById('step-count');
    const avgSteps = document.getElementById('avg-steps');
    const successRate = document.getElementById('success-rate');
    const learningProgress = document.getElementById('learning-progress');
    const learningStatus = document.getElementById('learning-status');
    const phaseExplore = document.getElementById('phase-explore');
    const phaseLearn = document.getElementById('phase-learn');
    const phaseExploit = document.getElementById('phase-exploit');
    const qValueGrid = document.getElementById('q-value-grid');
    
    // Initialize maze environment
    const maze = new Maze(8, 8);
    
    // Initialize Q-learning agent
    const agent = new QLearning(4); // 4 actions: up, right, down, left
    
    let isTraining = false;
    let currentEpisode = 0;
    let maxEpisodes = 100;
    
    function resetEnvironment() {
        maze.reset();
        updateStats();
        updateQValueVisualization();
    }
    
    function updateStats() {
        if (!episodeCount || !stepCount || !avgSteps || !successRate) return;
        
        episodeCount.textContent = agent.stats.episodes;
        stepCount.textContent = agent.stats.steps;
        
        const avgStepCount = agent.stats.episodeLengths.length > 0 
            ? Math.round(agent.stats.episodeLengths.reduce((a, b) => a + b, 0) / agent.stats.episodeLengths.length) 
            : 0;
        avgSteps.textContent = avgStepCount;
        
        const successRateValue = agent.stats.episodes > 0 
            ? Math.round((agent.stats.successfulEpisodes / agent.stats.episodes) * 100) 
            : 0;
        successRate.textContent = `${successRateValue}%`;
    }
    
    function updateQValueVisualization() {
        if (!qValueGrid) return;
        
        qValueGrid.innerHTML = '';
        
        // We'll use a 5x5 grid for visualization, focusing on the center of the maze
        for (let y = 1; y < 6; y++) {
            for (let x = 1; x < 6; x++) {
                const state = `${x},${y}`;
                const qValues = agent.qTable[state];
                
                const cell = document.createElement('div');
                cell.classList.add('q-cell');
                
                // If the state has Q-values, color it based on the maximum Q-value
                if (qValues) {
                    const maxQ = Math.max(...qValues);
                    // Scale the color intensity based on the value relative to the goal reward
                    const intensity = Math.min(1, Math.max(0, (maxQ / maze.goalReward) * 0.8 + 0.2));
                    cell.style.backgroundColor = `rgba(59, 130, 246, ${intensity})`;
                    
                    // Show the best action direction with an arrow
                    if (maxQ > 0) {
                        const bestAction = agent.getBestAction(state);
                        const arrows = ['↑', '→', '↓', '←'];
                        cell.innerHTML = `<span class="text-white font-bold">${arrows[bestAction]}</span>`;
                        cell.classList.add('flex', 'items-center', 'justify-center');
                    }
                }
                
                qValueGrid.appendChild(cell);
            }
        }
    }
    
    function updateLearningPhase() {
        if (!phaseExplore || !phaseLearn || !phaseExploit) return;
        
        const progress = currentEpisode / maxEpisodes;
        
        if (progress < 0.3) {
            // Exploration phase
            phaseExplore.className = 'phase-active';
            phaseLearn.className = 'phase-inactive';
            phaseExploit.className = 'phase-inactive';
            learningStatus.textContent = '探索阶段: 智能体正在随机尝试不同行动';
        } else if (progress < 0.7) {
            // Learning phase
            phaseExplore.className = 'phase-inactive';
            phaseLearn.className = 'phase-active';
            phaseExploit.className = 'phase-inactive';
            learningStatus.textContent = '学习阶段: 智能体开始发现有效策略';
        } else {
            // Exploitation phase
            phaseExplore.className = 'phase-inactive';
            phaseLearn.className = 'phase-inactive';
            phaseExploit.className = 'phase-active';
            learningStatus.textContent = '利用阶段: 智能体利用学到的最佳策略';
        }
        
        // Update progress bar
        if (learningProgress) {
            learningProgress.style.width = `${progress * 100}%`;
        }
    }
    
    async function runEpisode() {
        if (!isTraining) return;
        
        // Reset the environment and get the initial state
        let state = maze.reset();
        let totalReward = 0;
        let steps = 0;
        let done = false;
        
        while (!done && steps < 200) { // Limit steps to prevent infinite loops
            // Choose an action
            const action = agent.chooseAction(state);
            
            // Take the action
            const { nextState, reward, done: episodeDone } = maze.step(action);
            
            // Update Q-values
            agent.update(state, action, reward, nextState);
            
            // Update state
            state = nextState;
            totalReward += reward;
            steps++;
            agent.stats.steps++;
            
            // Check if episode is done
            done = episodeDone;
            
            // Add a delay to visualize the learning process
            const speed = 11 - parseInt(speedSlider.value, 10);
            await new Promise(resolve => setTimeout(resolve, speed * 50));
        }
        
        // Update agent stats
        agent.stats.episodes++;
        agent.stats.totalReward += totalReward;
        agent.stats.episodeLengths.push(steps);
        
        if (done) {
            agent.stats.successfulEpisodes++;
        }
        
        // Decay exploration rate
        agent.decayExploration();
        
        // Show optimal path occasionally
        if (currentEpisode % 5 === 0 || currentEpisode >= maxEpisodes - 1) {
            const optimalPath = agent.getOptimalPath(maze.startPos.x + ',' + maze.startPos.y, maze);
            maze.showPath(optimalPath);
        }
        
        // Update UI
        updateStats();
        updateQValueVisualization();
        updateLearningPhase();
        
        // Next episode
        currentEpisode++;
        
        if (currentEpisode < maxEpisodes) {
            setTimeout(runEpisode, 200);
        } else {
            isTraining = false;
            btnTrain.textContent = '开始训练';
            learningStatus.textContent = '训练完成! 智能体已学会找到最优路径';
        }
    }
    
    // Event listeners
    if (btnReset) {
        btnReset.addEventListener('click', function() {
            isTraining = false;
            currentEpisode = 0;
            agent.stats = {
                episodes: 0,
                steps: 0,
                totalReward: 0,
                successfulEpisodes: 0,
                episodeLengths: []
            };
            agent.explorationRate = 1.0;
            agent.qTable = {};
            resetEnvironment();
            updateLearningPhase();
            btnTrain.textContent = '开始训练';
            learningStatus.textContent = '等待开始训练...';
        });
    }
    
    if (btnTrain) {
        btnTrain.addEventListener('click', function() {
            if (isTraining) {
                isTraining = false;
                btnTrain.textContent = '开始训练';
                learningStatus.textContent = '训练暂停';
            } else {
                isTraining = true;
                btnTrain.textContent = '暂停训练';
                runEpisode();
            }
        });
    }
    
    // Initialize Q-value visualization grid
    function initQValueGrid() {
        if (!qValueGrid) return;
        
        qValueGrid.innerHTML = '';
        
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                const cell = document.createElement('div');
                cell.classList.add('q-cell');
                qValueGrid.appendChild(cell);
            }
        }
    }
    
    // Initialize the visualization
    initQValueGrid();
    updateStats();
    updateLearningPhase();
});
