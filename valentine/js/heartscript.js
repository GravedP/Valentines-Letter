let isSpawningActive = false;
let intervalId;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

open.addEventListener('click', function() {
    isSpawningActive = !isSpawningActive;

    if (isSpawningActive) {
        startSpawning();
    } else {
        clearInterval(intervalId);
        console.log("Prozess gestoppt.");
    }

    setTimeout(() => spawnHeart(), 400);  // Erstes Herz nach 400 ms
    setTimeout(() => spawnHeart(), 3200); // Zweites Herz nach 3200 ms
});

function spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('shape-container', 'shape-container--with-indicators');
    heart.innerHTML = `
        <div class="shape">
            <img src="pictures/heart.png" width="30px" height="30px">
        </div>
    `;

    heart.style.left = `${randomIntFromInterval(13, 37)}vw`;
    heartsinecontainer.appendChild(heart);

    // Entferne das Herz nach 10 Sekunden
    setTimeout(() => {
        heart.remove();
        console.log("Herz entfernt:", heart);
    }, 7000);
}

function startSpawning() {
    const intervalTime = randomIntFromInterval(1000, 5000);
    intervalId = setInterval(() => {
        if (isSpawningActive) {
            spawnHeart();
        } else {
            clearInterval(intervalId);
            console.log("Prozess gestoppt.");
        }
    }, intervalTime);
}
