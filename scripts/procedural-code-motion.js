/**
 * Procedural 2D ASCII Tree - HIGH VOLUME
 * A lush, flat recursive branching algorithm.
 */
class HighVolume2DTree {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.fontSize = 11;
        this.maxDepth = 7;
        this.growth = 0;
        this.phase = 0;
        
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.init());
    }

    init() {
        this.canvas.width = this.canvas.offsetWidth || 220;
        this.canvas.height = this.canvas.offsetHeight || 220;
        this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
    }

    drawBranch(x, y, angle, length, depth) {
        if (depth > this.maxDepth) return;

        // Growth timing per depth
        const depthThreshold = depth / (this.maxDepth + 1);
        if (this.growth < depthThreshold) return;

        const localGrowth = Math.min(1, (this.growth - depthThreshold) * (this.maxDepth + 1));
        const currentLength = length * localGrowth;

        if (currentLength < 1) return;

        // 2D Coordinates
        const x2 = x + Math.cos(angle) * currentLength;
        const y2 = y + Math.sin(angle) * currentLength;

        // Character selection (Classic 2D ASCII)
        let char = "|";
        if (depth >= this.maxDepth - 1) char = "*";
        else if (Math.abs(Math.cos(angle)) > 0.7) char = "_";
        else if (angle < -Math.PI/2) char = "/";
        else if (angle > -Math.PI/2) char = "\\";

        // Opacity based on depth
        const alpha = 0.2 + (1 - depth / this.maxDepth) * 0.8;
        this.ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
        this.ctx.fillText(char, x, y);

        // Branching logic (2D Spread)
        const nextLen = length * 0.72;
        const wind = Math.sin(this.phase + depth) * 0.05;

        // More branches for high volume
        if (this.growth > depthThreshold) {
            // Main left and right
            this.drawBranch(x2, y2, angle - 0.5 + wind, nextLen, depth + 1);
            this.drawBranch(x2, y2, angle + 0.5 + wind, nextLen, depth + 1);
            
            // Middle filler for volume
            if (depth > 1) {
                this.drawBranch(x2, y2, angle + wind, nextLen * 0.8, depth + 1);
            }
            // Side sprout for extra bushiness
            if (depth > 3) {
                const sideSprout = depth % 2 === 0 ? 0.8 : -0.8;
                this.drawBranch(x2, y2, angle + sideSprout + wind, nextLen * 0.6, depth + 1);
            }
        }
    }

    animate() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";

        // Growth speed
        if (this.growth < 1.0) {
            this.growth += 0.003;
        } else {
            if (Math.random() > 0.99) this.growth = 0;
        }

        this.phase += 0.03;

        // Start 2D tree from bottom center
        this.drawBranch(this.canvas.width / 2, this.canvas.height - 20, -Math.PI / 2, 45, 0);

        // UI Decoration
        this.ctx.fillStyle = "rgba(57, 255, 20, 0.3)";
        this.ctx.font = "8px 'JetBrains Mono'";
        this.ctx.fillText(`MODE: 2D_HIGH_VOL`, this.canvas.width / 2, 10);
        
        requestAnimationFrame(() => this.animate());
    }
}

window.addEventListener('load', () => {
    const canvas = document.getElementById('motion-canvas');
    if (canvas) new HighVolume2DTree('motion-canvas');
});
