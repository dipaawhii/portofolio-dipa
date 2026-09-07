import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GlobalBackground = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const bubblesGroupRef = useRef(null);
    const waveMeshRef = useRef(null);
    const waveMaterialRef = useRef(null);
    const clockRef = useRef(new THREE.Clock());

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 38;
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        rendererRef.current = renderer;

        // Bubbles setup
        const bubblesGroup = new THREE.Group();
        const bubbleGeo = new THREE.SphereGeometry(1, 32, 32);
        const colors = [0xF5EFE6, 0xF9D8E6, 0xB4C6DF];
        const bubblePositions = [];

        for (let i = 0; i < 45; i++) {
            const material = new THREE.MeshPhysicalMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                metalness: 0.1,
                roughness: 0.1,
                transmission: 0.9,
                thickness: 1.0,
                clearcoat: 0.5,
                clearcoatRoughness: 0.1,
                transparent: true,
                opacity: 1.0
            });
            const mesh = new THREE.Mesh(bubbleGeo, material);
            const scale = Math.random() * 3.5 + 1.2;
            
            let x, y, z, isColliding;
            let attempts = 0;
            
            do {
                x = (Math.random() - 0.5) * 90;
                y = (Math.random() - 0.5) * 70;
                z = (Math.random() - 0.5) * 50 - 10;
                isColliding = false;
                
                for (let j = 0; j < bubblePositions.length; j++) {
                    const other = bubblePositions[j];
                    const dist = Math.sqrt((x - other.x) ** 2 + (y - other.y) ** 2 + (z - other.z) ** 2);
                    if (dist < (scale + other.scale) * 1.2) {
                        isColliding = true;
                        break;
                    }
                }
                attempts++;
            } while (isColliding && attempts < 10);
            
            if (!isColliding) {
                mesh.position.set(x, y, z);
                mesh.scale.set(scale, scale, scale);
                mesh.userData = {
                    speedY: Math.random() * 0.02 + 0.005,
                    speedRot: Math.random() * 0.01,
                    offset: Math.random() * Math.PI * 2
                };
                bubblePositions.push({ x, y, z, scale });
                bubblesGroup.add(mesh);
            }
        }
        bubblesGroupRef.current = bubblesGroup;
        scene.add(bubblesGroup);

        // Wave setup
        const waveGeometry = new THREE.BufferGeometry();
        const waveGridSize = 60;
        const waveCount = waveGridSize * waveGridSize;
        const wavePosArray = new Float32Array(waveCount * 3);
        const waveColorsArray = new Float32Array(waveCount * 3);

        let idx = 0;
        for (let i = 0; i < waveGridSize; i++) {
            for (let j = 0; j < waveGridSize; j++) {
                const x = (i - waveGridSize / 2) * 1.5;
                const z = (j - waveGridSize / 2) * 1.5;
                const y = 0;

                wavePosArray[idx * 3] = x;
                wavePosArray[idx * 3 + 1] = y;
                wavePosArray[idx * 3 + 2] = z;

                const colorMix = (Math.sin(i * 0.2) + Math.cos(j * 0.2) + 2) / 4;
                if (colorMix > 0.5) {
                    waveColorsArray[idx * 3] = 0.63;
                    waveColorsArray[idx * 3 + 1] = 0.11;
                    waveColorsArray[idx * 3 + 2] = 0.34;
                } else {
                    waveColorsArray[idx * 3] = 0.70;
                    waveColorsArray[idx * 3 + 1] = 0.77;
                    waveColorsArray[idx * 3 + 2] = 0.87;
                }
                idx++;
            }
        }

        waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePosArray, 3));
        waveGeometry.setAttribute('color', new THREE.BufferAttribute(waveColorsArray, 3));

        const waveMaterial = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        waveMaterialRef.current = waveMaterial;

        const waveMesh = new THREE.Points(waveGeometry, waveMaterial);
        waveMesh.rotation.x = Math.PI / 2.5;
        waveMesh.position.y = -10;
        waveMeshRef.current = waveMesh;
        scene.add(waveMesh);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(10, 20, 10);
        scene.add(dirLight);

        const pointLight1 = new THREE.PointLight(0xA11D58, 2, 50);
        pointLight1.position.set(-10, 10, 10);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xB4C6DF, 2, 50);
        pointLight2.position.set(10, -10, 10);
        scene.add(pointLight2);

        // Mouse tracking
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (event) => {
            mouseX = (event.clientX - window.innerWidth / 2);
            mouseY = (event.clientY - window.innerHeight / 2);
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clockRef.current.getElapsedTime();

            const isDark = document.documentElement.classList.contains('dark');

            if (isDark) {
                waveMaterial.opacity += (0.8 - waveMaterial.opacity) * 0.05;
                bubblesGroup.visible = false;
                bubblesGroup.children.forEach(b => {
                    b.material.opacity = 0;
                });

                const positions = waveGeometry.attributes.position.array;
                let pIdx = 0;
                for (let i = 0; i < waveGridSize; i++) {
                    for (let j = 0; j < waveGridSize; j++) {
                        positions[pIdx * 3 + 1] = Math.sin((i + elapsedTime * 2) * 0.15) * 2.5 + Math.cos((j + elapsedTime * 1.5) * 0.15) * 2.5;
                        pIdx++;
                    }
                }
                waveGeometry.attributes.position.needsUpdate = true;
                waveMesh.rotation.z = Math.sin(elapsedTime * 0.05) * 0.05;
            } else {
                waveMaterial.opacity += (0.0 - waveMaterial.opacity) * 0.05;
                bubblesGroup.visible = true;
                bubblesGroup.children.forEach(b => {
                    b.material.opacity += (1.0 - b.material.opacity) * 0.05;
                });

                bubblesGroup.children.forEach((bubble) => {
                    bubble.position.y += Math.sin(elapsedTime + bubble.userData.offset) * bubble.userData.speedY;
                    bubble.rotation.x += bubble.userData.speedRot;
                    bubble.rotation.y += bubble.userData.speedRot;
                });
            }

targetX = mouseX * 0.02;
                targetY = mouseY * 0.02;

            camera.position.x += 0.05 * (targetX - camera.position.x);
            camera.position.y += 0.05 * (-targetY - camera.position.y);
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} id="bg-canvas" className="fixed inset-0 w-full h-full pointer-events-none z-[-3]"></canvas>
            <div className="bg-noise fixed inset-0 pointer-events-none z-[-2]"></div>
        </>
    );
};

export default GlobalBackground;