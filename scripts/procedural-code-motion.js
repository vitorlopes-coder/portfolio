/**
 * 3D ASCII Atomic Electron Simulation
 * Central nucleus with multiple high-speed electron orbital paths.
 */
class ASCIIAtomicModel {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.fontSize = 11;
        this.angleX = 0;
        this.angleY = 0;
        this.angleZ = 0;
        
        this.nucleusPoints = [];
        this.orbits = [];
        this.electronSpeed = 0.05;
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.init());
    }

    init() {
        this.canvas.width = this.canvas.offsetWidth || 220;
        this.canvas.height = this.canvas.offsetHeight || 220;
        
        // 1. Generate Nucleus (Central Sphere)
        this.nucleusPoints = [];
        const nucleusDensity = 150;
        for (let i = 0; i < nucleusDensity; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 30; // Compact nucleus
            
            this.nucleusPoints.push({
                x: r * Math.sin(phi) * Math.cos(theta),
                y: r * Math.sin(phi) * Math.sin(theta),
                z: r * Math.cos(phi),
                char: ["#", "@", "0", "1"][Math.floor(Math.random() * 4)]
            });
        }

        // 2. Generate Multi-Axis Orbits (Electrons)
        this.orbits = [];
        const orbitConfigs = [
            { r: 70, tiltX: 0.5, tiltZ: 0.2, color: "#39FF14", char: "-" },
            { r: 85, tiltX: -0.8, tiltZ: 1.2, color: "#22C55E", char: "." },
            { r: 100, tiltX: 1.5, tiltZ: -0.5, color: "#15803D", char: "+" },
            { r: 110, tiltX: 0.2, tiltZ: 2.5, color: "#39FF14", char: ":" },
            { r: 60, tiltX: -1.2, tiltZ: -1.2, color: "#39FF14", char: "~" }
        ];

        orbitConfigs.forEach((cfg, idx) => {
            const particles = [];
            const density = 40 + Math.random() * 40;
            for (let i = 0; i < density; i++) {
                const angle = Math.random() * Math.PI * 2;
                particles.push({ angle, dist: cfg.r });
            }
            this.orbits.push({
                ...cfg,
                particles,
                electronAngle: Math.random() * Math.PI * 2,
                speedMult: 0.8 + Math.random() * 1.5
            });
        });
        
        console.log("[DEBUG] ASCII Atomic Model Initialized");
    }

    rotate(p, ax, ay, az) {
        let {x, y, z} = p;
        // Basic 3D rotation logic
        let c, s, tmp;
        // X
        c = Math.cos(ax); s = Math.sin(ax);
        tmp = y * c - z * s; z = y * s + z * c; y = tmp;
        // Y
        c = Math.cos(ay); s = Math.sin(ay);
        tmp = x * c + z * s; z = -x * s + z * c; x = tmp;
        // Z
        c = Math.cos(az); s = Math.sin(az);
        tmp = x * c - y * s; y = x * s + y * c; x = tmp;

        return {x, y, z};
    }

    project(p) {
        const perspective = 400;
        const scale = perspective / (perspective + p.z);
        const x2d = (p.x * scale) + (this.canvas.width / 2);
        const y2d = (p.y * scale) + (this.canvas.height / 2);
        return {x: x2d, y: y2d, scale, z: p.z};
    }

    animate() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        let drawList = [];

        // Add Nucleus
        this.nucleusPoints.forEach(p => {
            const rot = this.rotate(p, this.angleX, this.angleY, this.angleZ);
            drawList.push({...this.project(rot), char: p.char, color: "#39FF14", isElectron: false});
        });

        // Add Orbits and Electrons
        this.orbits.forEach(orbit => {
            // Static particles (The Ring/Path)
            orbit.particles.forEach(pt => {
                let p = { x: pt.dist * Math.cos(pt.angle), y: 0, z: pt.dist * Math.sin(pt.angle) };
                // Apply orbit tilt + global rotation
                let rot = this.rotate(p, orbit.tiltX, 0, orbit.tiltZ);
                rot = this.rotate(rot, this.angleX, this.angleY, this.angleZ);
                drawList.push({...this.project(rot), char: orbit.char, color: orbit.color, isElectron: false, opacity: 0.4});
            });

            // The "Electron" (Single fast bright point)
            let e = { x: orbit.r * Math.cos(orbit.electronAngle), y: 0, z: orbit.r * Math.sin(orbit.electronAngle) };
            let eRot = this.rotate(e, orbit.tiltX, 0, orbit.tiltZ);
            eRot = this.rotate(eRot, this.angleX, this.angleY, this.angleZ);
            drawList.push({...this.project(eRot), char: "●", color: "#FFFFFF", isElectron: true});

            // Update electron position
            orbit.electronAngle += this.electronSpeed * orbit.speedMult;
        });

        // Depth Sorting
        drawList.sort((a, b) => b.z - a.z);

        // Render
        drawList.forEach(p => {
            const alpha = p.isElectron ? 1 : Math.max(0.1, (p.z + 150) / 300) * (p.opacity || 1);
            const size = Math.max(3, (p.isElectron ? 14 : this.fontSize) * p.scale);

            this.ctx.fillStyle = p.isElectron ? "#39FF14" : p.color;
            this.ctx.globalAlpha = alpha;
            this.ctx.font = `bold ${size}px 'JetBrains Mono', monospace`;
            this.ctx.fillText(p.char, p.x, p.y);
        });
        this.ctx.globalAlpha = 1;

        // Global rotation
        this.angleX += 0.01;
        this.angleY += 0.015;

        requestAnimationFrame(() => this.animate());
    }
}

window.addEventListener('load', () => {
    const canvas = document.getElementById('motion-canvas');
    if (canvas) new ASCIIAtomicModel('motion-canvas');
});
