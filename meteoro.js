const NUM_STARS = 1000;
        const METEOR_INTERVAL = 50; // Intervalo em milissegundos entre meteoros

        // Função para criar estrelas no fundo
        const createStars = () => {
            for (let i = 0; i < NUM_STARS; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * 100}vh`;
                star.style.opacity = Math.random();
                star.style.transform = `scale(${Math.random()})`;
                document.body.appendChild(star);
            }
        };

        // Função para criar um meteoro
        const createMeteor = () => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');

            // Posição inicial aleatória fora da tela
// Posição inicial aleatória ao longo das bordas superiores ou laterais
const spawnSide = Math.random(); // Número aleatório entre 0 e 1 para decidir o lado de spawn
let startX, startY;

if (spawnSide < 0.5) {
    // 50% de chance de começar na borda superior
    startX = Math.random() * window.innerWidth; // Qualquer posição horizontal
    startY = -50; // Um pouco acima da tela
} else {
    // 50% de chance de começar na lateral esquerda
    startX = -50; // Um pouco à esquerda da tela
    startY = Math.random() * window.innerHeight; // Qualquer posição vertical
}

meteor.style.left = `${startX}px`;
meteor.style.top = `${startY}px`;


            // Duração e tamanho aleatórios para variação
            const duration = Math.random() * 1.5 + 0.5; // Entre 0.5s e 2s
            const length = Math.random() * 60 + 40; // Entre 40px e 100px
            meteor.style.animationDuration = `${duration}s`;
            meteor.style.height = `${length}px`;

            // Adiciona cores vibrantes ao meteoro (estilo cartoon)
            const colors = ["#FFFFF"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            meteor.style.background = `linear-gradient(to top, ${randomColor}, rgba(255, 255, 255, 0))`;
            meteor.style.boxShadow = `0 0 100px ${randomColor}`;

            document.body.appendChild(meteor);

            // Remover meteoro após a animação
            setTimeout(() => {
                meteor.remove();
            }, duration * 1000);
        };

        // Inicializar estrelas
        createStars();

        // Gerar meteoros continuamente
        setInterval(createMeteor, METEOR_INTERVAL);
