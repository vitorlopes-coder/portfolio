document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Effect for Headline
    const headline = document.getElementById('typing-text');
    const textToType = "> Crio sites e interfaces rápidas, bonitas e fáceis de usar.";
    let index = 2; // Start after "> "

    function typeWriter() {
        if (index < textToType.length) {
            headline.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 50 + Math.random() * 50);
        } else {
            headline.classList.add('typing-cursor');
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);

    // 2. IDE Tab Switching
    const tabs = document.querySelectorAll('.tab');
    const bioContent = document.getElementById('bio-text');

    const fileContents = {
        'bio.ts': `
            <p>Sou desenvolvedor frontend e gosto de criar experiências simples e agradáveis.</p>
            <p>Trabalho com foco em clareza visual, desempenho e acessibilidade.</p>
            <p>Também estudo IA aplicada e arquitetura para construir soluções duráveis.</p>
        `,
        'projects.md': `
            <p># Meus Projetos</p>
            <p>- **E-commerce Dashboard**: React + Node.js</p>
            <p>- **Terminal Portfolio**: HTML/CSS/JS Puro</p>
            <p>- **AI Integration Tool**: Estudo de modelos LLM</p>
            <p>---</p>
            <p>Confira mais no meu GitHub!</p>
        `
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const fileName = tab.getAttribute('data-file');
            
            // Update Active Class
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update Content with simple transition
            bioContent.style.opacity = '0';
            setTimeout(() => {
                bioContent.innerHTML = fileContents[fileName];
                bioContent.style.opacity = '1';
            }, 200);
        });
    });

    // 3. Infinite Marquee Clone for smoothness
    // We already have some clones in HTML, but for very large screens 
    // we could dynamically clone more if needed. 
    // For now, the CSS animation handles the motion.

    // 4. Smooth Scrolling for Nav Links
    document.querySelectorAll('.nav-item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                // For this prototype, we'll just log or jump
                console.log(`Navigating to ${targetId}`);
            }
        });
    });

    // 5. Hover Effects on command boxes (visual feedback)
    const cmdBoxes = document.querySelectorAll('.cmd-box');
    cmdBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.borderColor = 'var(--color-primary)';
            box.style.boxShadow = '0 0 10px rgba(57, 255, 20, 0.2)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.borderColor = 'var(--stroke-dark)';
            box.style.boxShadow = 'none';
        });
    });
});
