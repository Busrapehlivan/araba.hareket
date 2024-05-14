document.addEventListener('DOMContentLoaded', function () {
    const araba = document.getElementById('araba');
    let arabaX = 50;
    let arabaY = 50;

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (key === 'ArrowRight') {
            arabaX += 5; // Sağa hareket
        } else if (key === 'ArrowLeft') {
            arabaX -= 5; // Sola hareket
        } else if (key === 'ArrowDown') {
            arabaY += 5; // Aşağı hareket
        } else if (key === 'ArrowUp') {
            arabaY -= 5; // Yukarı hareket
        }
        araba.style.left = arabaX + 'px';
        araba.style.top = arabaY + 'px';
    });
});

