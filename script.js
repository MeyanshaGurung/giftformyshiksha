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

const message = 'Dear shiksha';
let i = 0;
const speed = 45;

function typeWriter() {
    if (i < message.length) {
        if (message.charAt(i) === '\n') {
            document.getElementById("typewriter").innerHTML += '<br>';
        } else {
            document.getElementById("typewriter").innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

function startLove() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('transition').style.display = 'block';

    const music = document.getElementById("loveSong");
    music.play().catch(() => {});

    setTimeout(() =>{
        document.getElementById('transition').style.display = 'none';
        document.getElementById('letter').style.display = 'block';
        typeWriter();
    }, 2500);
}

