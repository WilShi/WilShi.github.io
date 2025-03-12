// Maze environment for reinforcement learning demonstration
class Maze {
    constructor(width, height) {
        this.width = width || 8;
        this.height = height || 8;
        this.grid = [];
        this.startPos = { x: 0, y: 0 };
        this.goalPos = { x: this.width - 1, y: this.height - 1 };
        this.agentPos = { ...this.startPos };
        
        // Rewards
        this.stepReward = -1;
        this.goalReward = 100;
        this.wallPenalty = -10;
        
        this.generateMaze();
        this.renderMaze();
        this.placeAgent();
    }
    
    generateMaze() {
        // Initialize empty grid
        this.grid = new Array(this.height);
        for (let y = 0; y < this.height; y++) {
            this.grid[y] = new Array(this.width).fill('empty');
        }
        
        // Set start and goal positions
        this.grid[this.startPos.y][this.startPos.x] = 'start';
        this.grid[this.goalPos.y][this.goalPos.x] = 'goal';
        
        // Add walls in a pattern to create a maze
        // Vertical walls with gaps
        for (let y = 1; y < this.height - 1; y++) {
            if (y % 3 !== 0) {
                this.grid[y][2] = 'wall';
            }
        }
        
        for (let y = 1; y < this.height - 1; y++) {
            if (y % 3 !== 1) {
                this.grid[y][5] = 'wall';
            }
        }
        
        // Horizontal walls with gaps
        for (let x = 1; x < this.width - 1; x++) {
            if (x % 3 !== 1) {
                this.grid[2][x] = 'wall';
            }
        }
        
        for (let x = 1; x < this.width - 1; x++) {
            if (x % 3 !== 0) {
                this.grid[5][x] = 'wall';
            }
        }
        
        // Make sure start and goal are not walls
        this.grid[this.startPos.y][this.startPos.x] = 'start';
        this.grid[this.goalPos.y][this.goalPos.x] = 'goal';
    }
    
    renderMaze() {
        const mazeGrid = document.getElementById('maze-grid');
        if (!mazeGrid) return;
        
        mazeGrid.innerHTML = '';
        
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const cell = document.createElement('div');
                cell.classList.add('maze-cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                
                switch (this.grid[y][x]) {
                    case 'wall':
                        cell.classList.add('wall');
                        break;
                    case 'start':
                        cell.classList.add('start');
                        cell.textContent = 'S';
                        break;
                    case 'goal':
                        cell.classList.add('goal');
                        cell.textContent = 'G';
                        break;
                    case 'visited':
                        cell.classList.add('visited');
                        break;
                    case 'path':
                        cell.classList.add('path');
                        break;
                }
                
                mazeGrid.appendChild(cell);
            }
        }
    }
    
    placeAgent() {
        const agentElem = document.getElementById('maze-agent');
        if (!agentElem) return;
        
        const mazeGrid = document.getElementById('maze-grid');
        if (!mazeGrid) return;
        
        const cellWidth = mazeGrid.offsetWidth / this.width;
        const cellHeight = mazeGrid.offsetHeight / this.height;
        
        // Calculate agent position based on cell position
        const agentX = (this.agentPos.x + 0.5) * cellWidth;
        const agentY = (this.agentPos.y + 0.5) * cellHeight;
        
        agentElem.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-500">
                <use href="#agent-icon"></use>
            </svg>
        `;
        
        agentElem.style.left = `${agentX}px`;
        agentElem.style.top = `${agentY}px`;
    }
    
    reset() {
        // Reset agent position to start
        this.agentPos = { ...this.startPos };
        
        // Reset visited cells
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.grid[y][x] === 'visited' || this.grid[y][x] === 'path') {
                    this.grid[y][x] = 'empty';
                }
            }
        }
        
        this.renderMaze();
        this.placeAgent();
        
        return this.getState();
    }
    
    getState() {
        return `${this.agentPos.x},${this.agentPos.y}`;
    }
    
    isValidMove(x, y) {
        return (
            x >= 0 && x < this.width &&
            y >= 0 && y < this.height &&
            this.grid[y][x] !== 'wall'
        );
    }
    
    step(action) {
        let dx = 0, dy = 0;
        
        switch (action) {
            case 0: dy = -1; break; // Up
            case 1: dx = 1; break;  // Right
            case 2: dy = 1; break;  // Down
            case 3: dx = -1; break; // Left
        }
        
        const newX = this.agentPos.x + dx;
        const newY = this.agentPos.y + dy;
        
        // Check if move is valid
        if (!this.isValidMove(newX, newY)) {
            return {
                nextState: this.getState(),
                reward: this.wallPenalty,
                done: false
            };
        }
        
        // Update agent position
        this.agentPos.x = newX;
        this.agentPos.y = newY;
        
        // Update cell state for visualization
        if (this.grid[newY][newX] === 'empty') {
            this.grid[newY][newX] = 'visited';
        }
        
        // Check if goal reached
        const done = (this.agentPos.x === this.goalPos.x && this.agentPos.y === this.goalPos.y);
        const reward = done ? this.goalReward : this.stepReward;
        
        // Update visualization
        this.renderMaze();
        this.placeAgent();
        
        return {
            nextState: this.getState(),
            reward,
            done
        };
    }
    
    showPath(path) {
        // Clear previous path
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.grid[y][x] === 'path') {
                    this.grid[y][x] = 'empty';
                }
            }
        }
        
        // Mark the path
        path.forEach(({ x, y }) => {
            if (
                !(x === this.startPos.x && y === this.startPos.y) &&
                !(x === this.goalPos.x && y === this.goalPos.y) &&
                this.grid[y][x] !== 'wall'
            ) {
                this.grid[y][x] = 'path';
            }
        });
        
        this.renderMaze();
        this.placeAgent();
    }
}
