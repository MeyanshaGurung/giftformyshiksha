const hearts = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('span');

    heart.innerHTML = '💕';

    heart.style.left = (Math.random() * 100) + "vw";

    heart.style.animationDuration = (Math.random() * 4 + 6) + "s";

    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    
    
    hearts.appendChild(heart);
    
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 400);



