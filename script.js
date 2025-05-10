const adjectives = [
    "liebevoll", "fürsorglich", "geduldig", "stark", "herzlich", "klug", "verständnisvoll", "hilfsbereit", 
    "kreativ", "grosszügig", "aufmerksam", "charmant", "treu", "ehrlich", "inspirierend", "lebensfroh", 
    "zuverlässig", "motivierend", "einzigartig", "mutig", "freundlich", "sanft", "humorvoll", "gerecht", 
    "tolerant", "strahlend", "warmherzig", "gebildet", "rücksichtsvoll", "liebeenswert", "tapfer", 
    "mitfühlend", "verständlich", "organisiert", "naturverbunden", "loyal", "souverän", "gelassen", 
    "offenherzig", "lebendig", "weise", "positiv", "fleissig", "zärtlich", "einfühlsam", "wunderbar", 
    "bewundernswert"
];

window.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const adjectiveText = document.getElementById('adjectiveText');

    // Nach 1 Sekunde Herz vergrößern und Animation starten
    setTimeout(() => {
        heart.classList.add('grow');
        setTimeout(() => {
            startAdjectiveLoop();
        }, 600);
    }, 1000);
});

function startAdjectiveLoop() {
    const adjectiveText = document.getElementById('adjectiveText');
    let i = 0;
    function nextAdj() {
        if (i < adjectives.length) {
            adjectiveText.textContent = adjectives[i];
            i++;
            setTimeout(nextAdj, 350);
        } else {
            adjectiveText.textContent = "❤️";
            setTimeout(startAdjectiveLoop, 2000); // Nach 2 Sekunden wiederholen
        }
    }
    nextAdj();
}

function showAdjectives() {
    const container = document.getElementById('adjectives-container');
    container.innerHTML = ''; // Clear previous adjectives

    adjectives.forEach((adjective, index) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = adjective;
            span.className = 'adjective';
            span.style.top = `${Math.random() * 80 + 10}%`; // Random vertical position
            span.style.left = `${Math.random() > 0.5 ? '-100px' : '100vw'}`; // Start from left or right
            container.appendChild(span);

            // Trigger animation
            setTimeout(() => {
                span.style.transform = 'translateX(0)';
            }, 50);

            // Remove after animation
            setTimeout(() => {
                span.remove();
            }, 4000);
        }, index * 200); // Delay between each adjective
    });
}

// Event Listener für Herz und Button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('heart').onclick = showAdjectives;
    document.getElementById('openBtn').onclick = showAdjectives;
});