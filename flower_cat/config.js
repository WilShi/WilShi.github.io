export const gameConfig = {
    // 爪子相关配置
    claw: {
        width: 40,          // 爪子宽度
        height: 40,         // 爪子高度
        moveSpeed: 5,       // 爪子移动速度
        dropSpeed: 3,       // 爪子下降速度
        grabProbability: 0.7, // 抓取成功概率 (0-1)
        returnSpeed: 2,     // 爪子返回速度
        maxDropDistance: 400 // 最大下降距离
    },
    
    // 娃娃相关配置
    dolls: {
        minSize: 30,       // 最小尺寸
        maxSize: 50,        // 最大尺寸
        count: 8,          // 娃娃数量
        types: [           // 娃娃类型及其图片
            'bear',
            'rabbit',
            'cat',
            'dog'
        ]
    },
    
    // 游戏区域配置
    game: {
        width: 800,        // 游戏区域宽度
        height: 600,       // 游戏区域高度
        backgroundColor: '#f0f0f0',
        frameRate: 60      // 游戏帧率
    }
};