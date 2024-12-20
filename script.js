// 3D Starfield Animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to match the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create stars
let stars = [];
const numStars = 300;

function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width * 2 - canvas.width,
            y: Math.random() * canvas.height * 2 - canvas.height,
            z: Math.random() * canvas.width
        });
    }
}

// Draw stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach(star => {
        const k = 128.0 / star.z;
        const px = star.x * k + canvas.width / 2;
        const py = star.y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - star.z / canvas.width) * 2;
            ctx.fillRect(px, py, size, size);
        }

        star.z -= 2;
        if (star.z <= 0) {
            star.z = canvas.width;
            star.x = Math.random() * canvas.width * 2 - canvas.width;
            star.y = Math.random() * canvas.height * 2 - canvas.height;
        }
    });
    requestAnimationFrame(drawStars);
}

// Initialize stars and start the animation
createStars();
drawStars();

// Close navbar on link click (for mobile view)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});
