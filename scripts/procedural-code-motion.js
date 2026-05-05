/**
 * 3D ASCII Irregular Geometry
 * Simulates a rotating 3D cloud of characters projected into 2D space.
 */
class ASCII3DGeometry {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.points = [];
        this.pointCount = 200;
        this.angleX = 0;
        this.angleY = 0;
        this.angleZ = 0;
        
        // ASCII characters sorted by visual density
        this.ascii = " .:-=+*#%@";
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.init());
    }

    init() {
        this.canvas.width = this.canvas.offsetWidth || 220;
        this.canvas.height = this.canvas.offsetHeight || 220;
        
        // Generate a 3D sphere with irregular offsets
        this.points = [];
        for (let i = 0; i < this.pointCount; i++) {
            // Spherical coordinates
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            // Base radius + procedural irregularity
            const baseRadius = 60;
            const noise = Math.sin(theta * 3) * Math.cos(phi * 2) * 20;
            const r = baseRadius + noise;
            
            this.points.push({
                x: r * Math.sin(phi) * Math.cos(theta),
                y: r * Math.sin(phi) * Math.sin(theta),
                z: r * Math.cos(phi),
                char: this.ascii[Math.floor(Math.random() * this.ascii.length)]
            });
        }
        console.log("[DEBUG] 3D ASCII Initialized");
    }

    rotate(point) {
        let {x, y, z} = point;

        // Rotate X
        let cosX = Math.cos(this.angleX);
        let sinX = Math.sin(this.angleX);
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        y = y1; z = z1;

        // Rotate Y
        let cosY = Math.cos(this.angleY);
        let sinY = Math.sin(this.angleY);
        let x2 = x * cosY + z * sinY;
        let z2 = -x * sinY + z * cosY;
        x = x2; z = z2;

        // Rotate Z
        let cosZ = Math.cos(this.angleZ);
        let sinZ = Math.sin(this.angleZ);
        let x3 = x * cosZ - y * sinZ;
        let y3 = x * sinZ + y * cosZ;
        x = x3; y = y3;

        return {x, y, z};
    }

    project(point) {
        const perspective = 300;
        const scale = perspective / (perspective + point.z);
        const x2d = (point.x * scale) + (this.canvas.width / 2);
        const y2d = (point.y * scale) + (this.canvas.height / 2);
        return {x: x2d, y: y2d, scale, z: point.z};
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Sort points by depth (Z) for correct rendering (Painter's algorithm)
        const transformedPoints = this.points.map(p => {
            const rotated = this.rotate(p);
            const projected = this.project(rotated);
            return {...projected, char: p.char};
        }).sort((a, b) => b.z - a.z);

        transformedPoints.forEach(p => {
            // Brightness based on depth
            const alpha = Math.max(0.1, (p.z + 100) / 200);
            const size = Math.max(6, 14 * p.scale);

            this.ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
            this.ctx.font = `bold ${size}px 'JetBrains Mono'`;
            
            // Dynamic character based on position/depth
            this.ctx.fillText(p.char, p.x, p.y);
        });

        this.angleX += 0.01;
        this.angleY += 0.015;
        this.angleZ += 0.005;

        requestAnimationFrame(() => this.animate());
    }
}

// Global start
window.addEventListener('load', () => {
    const canvas = document.getElementById('motion-canvas');
    if (canvas) new ASCII3DGeometry('motion-canvas');
});
