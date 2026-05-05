/**
 * Procedural Rotating Irregular Shape
 * Robust initialization and animation loop
 */
class RotatingShape {
    constructor(canvasId) {
        console.log("Initializing RotatingShape...");
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error("Canvas not found:", canvasId);
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        
        this.rotation = 0;
        this.vertices = 8;
        this.radius = 60;
        this.points = [];
        this.phase = 0;

        // Force a resize check before starting
        this.init();
        
        // Start animation
        this.animate();

        window.addEventListener('resize', () => this.init());
    }

    init() {
        // Use offsetWidth/Height but fallback to client if needed
        const w = this.canvas.offsetWidth || this.canvas.clientWidth || 220;
        const h = this.canvas.offsetHeight || this.canvas.clientHeight || 220;
        
        this.canvas.width = w;
        this.canvas.height = h;
        
        console.log(`RotatingShape: Canvas sized to ${w}x${h}`);

        // Generate initial irregular offsets
        this.points = [];
        for (let i = 0; i < this.vertices; i++) {
            this.points.push({
                offset: Math.random() * 25,
                speed: 0.02 + Math.random() * 0.05
            });
        }
    }

    animate() {
        // Double check width to avoid invisible drawing
        if (this.canvas.width === 0) {
            this.init();
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        this.ctx.save();
        this.ctx.translate(centerX, centerY);
        this.ctx.rotate(this.rotation);

        this.ctx.beginPath();
        
        for (let i = 0; i <= this.vertices; i++) {
            const angle = (i / this.vertices) * Math.PI * 2;
            const p = this.points[i % this.vertices];
            
            // Wobble effect
            const wobble = Math.sin(this.phase + i) * 12;
            const r = this.radius + p.offset + wobble;
            
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;

            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }

        this.ctx.closePath();
        
        // Neon Green Stroke
        this.ctx.strokeStyle = "#39FF14";
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Faint Glow Fill
        this.ctx.fillStyle = "rgba(57, 255, 20, 0.08)";
        this.ctx.fill();

        this.ctx.restore();

        this.rotation += 0.012;
        this.phase += 0.04;

        requestAnimationFrame(() => this.animate());
    }
}

// Ensure execution after everything (including CSS) is applied
function startAnimation() {
    new RotatingShape('motion-canvas');
}

if (document.readyState === 'complete') {
    startAnimation();
} else {
    window.addEventListener('load', startAnimation);
}
