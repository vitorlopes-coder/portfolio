/**
 * Procedural ASCII Tree Growth
 * Simulates a tree growing using terminal characters and recursive branching.
 */
class ASCIITree {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.fontSize = 12;
        this.phase = 0;
        this.maxDepth = 6;
        this.growth = 0; // 0 to 1
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.init());
    }

    init() {
        this.canvas.width = this.canvas.offsetWidth || 220;
        this.canvas.height = this.canvas.offsetHeight || 220;
        this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
    }

    // Recursive function to draw ASCII branches
    drawBranch(x, y, angle, length, depth) {
        if (depth > this.maxDepth || length < 5) return;

        // Apply growth factor to the current length
        const currentLength = length * Math.min(1, this.growth * (this.maxDepth / (depth + 1)));
        
        if (currentLength < 2) return;

        const x2 = x + Math.cos(angle) * currentLength;
        const y2 = y + Math.sin(angle) * currentLength;

        // Choose character based on angle/depth
        let char = "|";
        if (depth === this.maxDepth) char = "*"; // Leaves
        else if (angle < -Math.PI/2 - 0.2) char = "/";
        else if (angle > -Math.PI/2 + 0.2) char = "\\";

        // Draw the character
        const alpha = 0.3 + (1 - depth / this.maxDepth) * 0.7;
        this.ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
        this.ctx.fillText(char, x, y);

        // Procedural variation for branching
        if (this.growth > (depth / this.maxDepth)) {
            const nextLength = length * 0.75;
            // Left branch
            this.drawBranch(x2, y2, angle - 0.4 + Math.sin(this.phase) * 0.1, nextLength, depth + 1);
            // Right branch
            this.drawBranch(x2, y2, angle + 0.4 + Math.cos(this.phase) * 0.1, nextLength, depth + 1);
        }
    }

    animate() {
        // Clear with trail
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";

        // Draw the tree from the bottom center
        const startX = this.canvas.width / 2;
        const startY = this.canvas.height - 20;
        
        // Grow the tree slowly
        if (this.growth < 1.2) { // Grow slightly beyond 1 for full branch reveal
            this.growth += 0.005;
        } else {
            // Reset growth after some time for an infinite loop effect
            if (Math.random() > 0.995) this.growth = 0;
        }

        // Add a "wind" effect using phase
        this.phase += 0.02;

        this.drawBranch(startX, startY, -Math.PI / 2, 45, 0);

        // Terminal UI Decoration: Status line at the bottom
        this.ctx.fillStyle = "rgba(57, 255, 20, 0.5)";
        this.ctx.font = "9px 'JetBrains Mono'";
        const progress = Math.min(100, Math.floor(this.growth * 100));
        this.ctx.fillText(`SYSTEM_GROWTH: ${progress}%`, this.canvas.width / 2, this.canvas.height - 5);
        
        // Scanlines
        this.ctx.fillStyle = "rgba(57, 255, 20, 0.03)";
        for (let i = 0; i < this.canvas.height; i += 3) {
            this.ctx.fillRect(0, i, this.canvas.width, 1);
        }

        this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`; // Reset font
        requestAnimationFrame(() => this.animate());
    }
}

// Start
window.addEventListener('load', () => {
    const canvas = document.getElementById('motion-canvas');
    if (canvas) new ASCIITree('motion-canvas');
});
