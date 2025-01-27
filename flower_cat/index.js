import { ClawMachine3D } from './game3d.js';
import { gameConfig } from './config.js';

// 等待DOM加载完成
window.addEventListener('DOMContentLoaded', () => {
    try {
        // 初始化游戏
        const game = new ClawMachine3D();
        console.log('游戏初始化成功');
    } catch (error) {
        console.error('游戏初始化失败:', error);
        alert('游戏加载失败，请刷新页面重试');
    }
});