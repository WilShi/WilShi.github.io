import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gameConfig } from './config.js';

export class ClawMachine3D {
    constructor() {
        // 初始化游戏状态
        this.score = 0;
        this.collectedDolls = [];
        this.moveDistance = gameConfig.claw.moveSpeed * 0.04;
        this.dropSpeed = gameConfig.claw.dropSpeed * 0.04;
        this.returnSpeed = gameConfig.claw.returnSpeed * 0.04;
        this.clawInitialPosition = new THREE.Vector3(-3, 5, 3);

        // 初始化Three.js场景
        this.initThreeJS();

        // 创建分数显示元素
        this.createScoreElement();
        this.createCollectedItemsElement();
        this.updateScoreDisplay();
        this.createOutputPort();

        // 创建机械爪
        this.initClaw();

        // 创建抓娃娃机的外壳
        this.createMachineCasing();

        // 创建地板
        this.createFloor();

        // 加载3D模型
        this.dolls = [];
        this.loadDollModels();

        // 设置控制
        this.setupControls();

        // 开始动画循环
        this.animate();
    }

    createScoreElement() {
        this.scoreElement = document.createElement('div');
        this.scoreElement.style.position = 'fixed';
        this.scoreElement.style.top = '10px';
        this.scoreElement.style.right = '10px';
        this.scoreElement.style.background = 'rgba(0, 0, 0, 0.7)';
        this.scoreElement.style.color = 'white';
        this.scoreElement.style.padding = '10px';
        this.scoreElement.style.borderRadius = '5px';
        this.scoreElement.style.fontFamily = 'Arial, sans-serif';
        document.body.appendChild(this.scoreElement);
    }

    createCollectedItemsElement() {
        this.collectedItemsElement = document.createElement('div');
        this.collectedItemsElement.style.position = 'fixed';
        this.collectedItemsElement.style.top = '60px';
        this.collectedItemsElement.style.right = '10px';
        this.collectedItemsElement.style.background = 'rgba(0, 0, 0, 0.7)';
        this.collectedItemsElement.style.color = 'white';
        this.collectedItemsElement.style.padding = '10px';
        this.collectedItemsElement.style.borderRadius = '5px';
        this.collectedItemsElement.style.fontFamily = 'Arial, sans-serif';
        document.body.appendChild(this.collectedItemsElement);
        this.updateCollectedItemsDisplay();
    }

    updateCollectedItemsDisplay() {
        const itemCounts = {};
        this.collectedDolls.forEach(type => {
            itemCounts[type] = (itemCounts[type] || 0) + 1;
        });
        let displayText = '获得的物品:\n';
        Object.entries(itemCounts).forEach(([type, count]) => {
            displayText += `${type}: ${count}个\n`;
        });
        this.collectedItemsElement.textContent = displayText;
    }

    createOutputPort() {
        // 创建出物口
        const outputPortGeometry = new THREE.BoxGeometry(2, 0.5, 2);
        const outputPortMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
        const outputPort = new THREE.Mesh(outputPortGeometry, outputPortMaterial);
        outputPort.position.set(-3, 0.25, 3);
        this.scene.add(outputPort);

        // 创建出物口内部
        const innerPortGeometry = new THREE.BoxGeometry(1.8, 0.4, 1.8);
        const innerPortMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
        const innerPort = new THREE.Mesh(innerPortGeometry, innerPortMaterial);
        innerPort.position.set(-3, 0.3, 3);
        this.scene.add(innerPort);
    }

    updateScoreDisplay() {
        this.scoreElement.textContent = `分数: ${this.score}`;
    }

    initThreeJS() {
        try {
            this.scene = new THREE.Scene();
            if (!this.scene) throw new Error('场景创建失败');

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            if (!this.camera) throw new Error('相机创建失败');

            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            if (!this.renderer) throw new Error('渲染器创建失败');

            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.shadowMap.enabled = true;
            document.body.appendChild(this.renderer.domElement);

            // 设置相机位置和视角
            this.camera.position.set(0, 10, 15);
            this.camera.lookAt(0, 2, 0);

            // 限制相机控制
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            if (!this.controls) throw new Error('控制器创建失败');

            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.minDistance = 10;
            this.controls.maxDistance = 20;
            this.controls.maxPolarAngle = Math.PI / 2.5;
            this.controls.minPolarAngle = Math.PI / 6;
            this.controls.enablePan = false;

            // 调整渲染器设置
            this.renderer.setClearColor(0xf0f0f0);
            this.renderer.setPixelRatio(window.devicePixelRatio);

            // 添加环境光和平行光
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            this.scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
            directionalLight.position.set(10, 10, 10);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            directionalLight.shadow.camera.near = 0.5;
            directionalLight.shadow.camera.far = 50;
            directionalLight.shadow.camera.left = -10;
            directionalLight.shadow.camera.right = 10;
            directionalLight.shadow.camera.top = 10;
            directionalLight.shadow.camera.bottom = -10;
            this.scene.add(directionalLight);

            // 添加补光
            const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
            fillLight.position.set(-5, 5, -5);
            this.scene.add(fillLight);

            // 添加窗口大小变化监听
            window.addEventListener('resize', () => {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            });

        } catch (error) {
            console.error('Three.js初始化失败:', error);
            throw error;
        }
    }

    initClaw() {
        this.claw = {
            group: new THREE.Group(),
            position: this.clawInitialPosition.clone(),
            isDropping: false,
            isReturning: false,
            holdingDoll: null
        };

        // 创建机械爪的基座
        const clawBase = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.5, 1),
            new THREE.MeshPhongMaterial({ color: 0xff4444 })
        );
        this.claw.group.add(clawBase);

        // 创建三个爪子
        const clawFingerGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);
        const clawFingerMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });

        for (let i = 0; i < 3; i++) {
            const finger = new THREE.Mesh(clawFingerGeometry, clawFingerMaterial);
            finger.position.y = -0.5;
            finger.rotation.y = (i * Math.PI * 2) / 3;
            finger.position.x = Math.cos(finger.rotation.y) * 0.5;
            finger.position.z = Math.sin(finger.rotation.y) * 0.5;
            this.claw.group.add(finger);
        }

        this.scene.add(this.claw.group);
        this.claw.group.position.copy(this.claw.position);
    }

    createFloor() {
        const floorGeometry = new THREE.PlaneGeometry(10, 10);
        const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = 0;
        floor.receiveShadow = true;
        this.scene.add(floor);
    }

    loadDollModels() {
        const loader = new GLTFLoader();
        const dollTypes = ['bear', 'rabbit', 'cat', 'dog'];
        const dollPositions = [
            { x: -1.5, y: 0.5, z: -1.5 },
            { x: 1.5, y: 0.5, z: -1.5 },
            { x: -1.5, y: 0.5, z: 1.5 },
            { x: 1.5, y: 0.5, z: 1.5 }
        ];

        dollTypes.forEach((type, index) => {
            // 创建一个临时的几何体作为替代
            const tempGeometry = new THREE.BoxGeometry(1, 1, 1);
            const tempMaterial = new THREE.MeshPhongMaterial({ 
                color: this.getDollColor(type) 
            });
            const tempModel = new THREE.Mesh(tempGeometry, tempMaterial);
            tempModel.position.set(
                dollPositions[index].x,
                dollPositions[index].y,
                dollPositions[index].z
            );
            tempModel.scale.set(0.8, 0.8, 0.8);
            tempModel.castShadow = true;
            this.scene.add(tempModel);
            this.dolls.push({
                model: tempModel,
                type: type
            });
        });
    }

    setupControls() {
        document.addEventListener('keydown', (e) => {
            if (!this.claw.isDropping && !this.claw.isReturning) {
                switch(e.key.toLowerCase()) {
                    case 'a':
                    case 'arrowleft':
                        this.claw.position.x = Math.max(this.claw.position.x - this.moveDistance, -3);
                        break;
                    case 'd':
                    case 'arrowright':
                        this.claw.position.x = Math.min(this.claw.position.x + this.moveDistance, 3);
                        break;
                    case 'w':
                    case 'arrowup':
                        this.claw.position.z = Math.max(this.claw.position.z - this.moveDistance, -3);
                        break;
                    case 's':
                    case 'arrowdown':
                        this.claw.position.z = Math.min(this.claw.position.z + this.moveDistance, 3);
                        break;
                    case ' ':
                        if (!this.claw.isDropping) {
                            this.claw.isDropping = true;
                            this.dropClaw();
                        }
                        break;
                }
                this.claw.group.position.copy(this.claw.position);
            }
        });
    }

    dropClaw() {
        const dropAnimation = () => {
            if (this.claw.position.y > 1) {
                this.claw.position.y -= this.dropSpeed;
                this.claw.group.position.copy(this.claw.position);

                // 检查是否抓到娃娃
                if (!this.claw.holdingDoll) {
                    this.dolls.forEach(doll => {
                        if (this.checkCollision(this.claw.group, doll.model)) {
                            // 增加抓取成功的概率
                            this.claw.holdingDoll = doll;
                            doll.model.parent.remove(doll.model);
                            this.claw.group.add(doll.model);
                            doll.model.position.set(0, -1, 0);
                        }
                    });
                }

                requestAnimationFrame(dropAnimation);
            } else {
                this.returnClaw();
            }
        };
        requestAnimationFrame(dropAnimation);
    }

    returnClaw() {
        this.claw.isDropping = false;
        this.claw.isReturning = true;

        const returnAnimation = () => {
            // 先垂直上升到顶部
            if (this.claw.position.y < this.clawInitialPosition.y) {
                this.claw.position.y += this.returnSpeed;
                this.claw.group.position.copy(this.claw.position);

                // 在上升过程中随机掉落
                if (this.claw.holdingDoll && Math.random() > (gameConfig.claw.grabProbability * 1.5)) {
                    const doll = this.claw.holdingDoll;
                    this.claw.group.remove(doll.model);
                    this.scene.add(doll.model);
                    doll.model.position.copy(this.claw.position);
                    doll.model.position.y = 0.5;
                    this.claw.holdingDoll = null;
                }

                requestAnimationFrame(returnAnimation);
            }
            // 然后水平移动到出物口上方
            else if (Math.abs(this.claw.position.x - (-3)) > 0.1 || Math.abs(this.claw.position.z - 3) > 0.1) {
                // 计算移动方向
                const dirX = (-3) - this.claw.position.x;
                const dirZ = 3 - this.claw.position.z;
                const length = Math.sqrt(dirX * dirX + dirZ * dirZ);
                
                // 标准化方向并应用速度
                this.claw.position.x += (dirX / length) * this.returnSpeed;
                this.claw.position.z += (dirZ / length) * this.returnSpeed;
                this.claw.group.position.copy(this.claw.position);
                requestAnimationFrame(returnAnimation);
            }
            // 最后完成返回动作
            else {
                this.claw.isReturning = false;
                if (this.claw.holdingDoll) {
                    // 成功抓到娃娃，更新得分和收集列表
                    this.score += 100;
                    this.collectedDolls.push(this.claw.holdingDoll.type);
                    this.updateScoreDisplay();
                    this.updateCollectedItemsDisplay();
                    
                    // 从dolls数组中移除已抓取的娃娃
                    const dollIndex = this.dolls.findIndex(d => d.type === this.claw.holdingDoll.type);
                    if (dollIndex !== -1) {
                        this.dolls.splice(dollIndex, 1);
                    }
                    
                    this.claw.holdingDoll.model.parent.remove(this.claw.holdingDoll.model);
                    this.claw.holdingDoll = null;

                    // 检查是否所有娃娃都被抓取
                    if (this.dolls.length === 0) {
                        this.showVictory();
                    }
                }
            }
        };
        requestAnimationFrame(returnAnimation);
    }

    showVictory() {
        const victoryContainer = document.getElementById('victory-container');
        victoryContainer.style.display = 'block';

        const restartButton = document.getElementById('restart-button');
        restartButton.onclick = () => this.restartGame();
    }

    restartGame() {
        // 隐藏胜利界面
        document.getElementById('victory-container').style.display = 'none';

        // 重置游戏状态
        this.score = 0;
        this.collectedDolls = [];
        this.updateScoreDisplay();
        this.updateCollectedItemsDisplay();

        // 重置机械爪位置
        this.claw.position.copy(this.clawInitialPosition);
        this.claw.group.position.copy(this.clawInitialPosition);
        this.claw.isDropping = false;
        this.claw.isReturning = false;
        this.claw.holdingDoll = null;

        // 重新加载娃娃
        this.dolls = [];
        this.loadDollModels();
    }

    checkCollision(object1, object2) {
        const box1 = new THREE.Box3().setFromObject(object1);
        const box2 = new THREE.Box3().setFromObject(object2);
        
        // 扩大碰撞检测范围
        box1.expandByScalar(0.5);
        
        return box1.intersectsBox(box2);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    getDollColor(type) {
        const colors = {
            'bear': 0x8B4513,
            'rabbit': 0xFFB6C1,
            'cat': 0x808080,
            'dog': 0xD2B48C
        };
        return colors[type] || 0x000000;
    }

    createMachineCasing() {
        // 创建机器外壳组
        const casingGroup = new THREE.Group();

        // 创建透明材质
        const glassMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });

        // 创建不透明材质
        const solidMaterial = new THREE.MeshPhongMaterial({
            color: 0x444444
        });

        // 创建前面板（透明）
        const frontPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 8),
            glassMaterial
        );
        frontPanel.position.set(0, 4, 4);
        casingGroup.add(frontPanel);

        // 创建后面板
        const backPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 8),
            solidMaterial
        );
        backPanel.position.set(0, 4, -4);
        backPanel.rotation.y = Math.PI;
        casingGroup.add(backPanel);

        // 创建左侧面板（透明）
        const leftPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 8),
            glassMaterial
        );
        leftPanel.position.set(-4, 4, 0);
        leftPanel.rotation.y = Math.PI / 2;
        casingGroup.add(leftPanel);

        // 创建右侧面板（透明）
        const rightPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 8),
            glassMaterial
        );
        rightPanel.position.set(4, 4, 0);
        rightPanel.rotation.y = -Math.PI / 2;
        casingGroup.add(rightPanel);

        // 创建顶部面板
        const topPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 8),
            solidMaterial
        );
        topPanel.position.set(0, 8, 0);
        topPanel.rotation.x = -Math.PI / 2;
        casingGroup.add(topPanel);

        // 创建底部面板
        const bottomPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 8),
            solidMaterial
        );
        bottomPanel.position.set(0, 0, 0);
        bottomPanel.rotation.x = Math.PI / 2;
        casingGroup.add(bottomPanel);

        // 添加到场景
        this.scene.add(casingGroup);
    }
}

// 添加错误处理函数
function handleError(error) {
    console.error('游戏运行时发生错误:', error);
    alert('游戏加载失败，请刷新页面重试');
}

// 启动游戏
window.addEventListener('DOMContentLoaded', () => {
    try {
        if (!window.THREE) {
            throw new Error('Three.js库加载失败');
        }
        const game = new ClawMachine3D();
        console.log('游戏初始化成功');
    } catch (error) {
        handleError(error);
    }
});