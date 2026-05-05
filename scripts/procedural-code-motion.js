/**
 * 3D ASCII Planet with Multiple Rotating Rings
 * Simulates a celestial body with complex orbital structures in terminal style.
 */
class ASCIIPlanetRings {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.fontSize = 11;
        this.angleX = 0.5; // Slight tilt
        this.angleY = 0;   // Main rotation
        this.angleZ = 0.2;
        
        this.planetPoints = [];
        this.ringPoints = [];
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.init());
    }

    init() {
        this.canvas.width = this.canvas.offsetWidth || 220;
        this.canvas.height = this.canvas.offsetHeight || 220;
        
        // 1. Generate Planet (Sphere)
        this.planetPoints = [];
        const planetDensity = 250;
        for (let i = 0; i < planetDensity; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 45; // Planet radius
            
            this.planetPoints.push({
                x: r * Math.sin(phi) * Math.cos(theta),
                y: r * Math.sin(phi) * Math.sin(theta),
                z: r * Math.cos(phi),
                char: i % 2 === 0 ? "0" : "1"
            });
        }

        // 2. Generate Multiple Rings
        this.ringPoints = [];
        this.generateRing(65, 75, 120, ["-", "=", "~"]); // Inner ring
        this.generateRing(85, 95, 150, [".", ":", "*"]); // Outer ring
        this.generateRing(105, 108, 80, ["#", "@"]);     // Thin far ring
        
        console.log("[DEBUG] ASCII Planet & Rings Initialized");
    }

    generateRing(innerR, outerR, density, chars) {
        for (let i = 0; i < density; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = innerR + Math.random() * (outerR - innerR);
            
            this.ringPoints.push({
                x: r * Math.cos(angle),
                y: 0, // Flat on one axis, we'll rotate it later
                z: r * Math.sin(angle),
                char: chars[Math.floor(Math.random() * chars.length)],
                orbitalSpeed: 0.01 + Math.random() * 0.02,
                ringId: innerR // To differentiate rotation logic
            });
        }
    }

    rotate(p, ax, ay, az) {
        let {x, y, z} = p;

        // Rotate X
        let cosX = Math.cos(ax), sinX = Math.sin(ax);
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        y = y1; z = z1;

        // Rotate Y
        let cosY = Math.cos(ay), sinY = Math.sin(ay);
        let x2 = x * cosY + z * sinY;
        let z2 = -x * sinY + z * cosY;
        x = x2; z = z2;

        // Rotate Z
        let cosZ = Math.cos(az), sinZ = Math.sin(az);
        let x3 = x * cosZ - y * sinZ;
        let y3 = x * sinZ + y * cosZ;
        x = x3; y = y3;

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
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Prepare points for sorting
        let allPoints = [];

        // Planet points (Self rotation)
        this.planetPoints.forEach(p => {
            const rotated = this.rotate(p, this.angleX, this.angleY, this.angleZ);
            allPoints.push({...this.project(rotated), char: p.char, type: 'planet'});
        });

        // Ring points (Orbital rotation)
        this.ringPoints.forEach(p => {
            // Internal ring spin + global tilt
            const orbitalAngle = this.angleY * 0.5 + (p.ringId * 0.1); 
            const tilted = this.rotate(p, 0.4, orbitalAngle, 0.2); // Ring local tilt
            const final = this.rotate(tilted, this.angleX, 0, this.angleZ); // Global tilt
            
            allPoints.push({...this.project(final), char: p.char, type: 'ring'});
        });

        // Z-Sorting (Painter's algorithm)
        allPoints.sort((a, b) => b.z - a.z);

        // Render
        allPoints.forEach(p => {
            const alpha = Math.max(0.1, (p.z + 150) / 300);
            const size = Math.max(4, this.fontSize * p.scale);

            this.ctx.fillStyle = p.type === 'planet' ? `rgba(57, 255, 20, ${alpha})` : `rgba(34, 197, 94, ${alpha * 0.7})`;
            this.ctx.font = `bold ${size}px 'JetBrains Mono', monospace`;
            this.ctx.fillText(p.char, p.x, p.y);
        });

        this.angleY += 0.015;
        this.angleX = 0.4 + Math.sin(this.angleY * 0.2) * 0.1; // Pulsing tilt

        requestAnimationFrame(() => this.animate());
    }
}

window.addEventListener('load', () => {
    const canvas = document.getElementById('motion-canvas');
    if (canvas) new ASCIIPlanetRings('motion-canvas');
});
