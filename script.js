const hearts = document.querySelector('.hearts');

function createHeart() {
    console.log('heart created')
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


function onButtonClick() {
    i = 0;
    document.getElementById("typewriter").innerHTML = "";
    setTimeout(typeWriter, 5000); 
}

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

    window.location.href = "letter.html";

}

const songImage= document.getElementById("song-image");
const songName= document.getElementById("song-name");
const songArtist= document.getElementById("song-artist");
const songSlider= document.getElementById("slider-song");

const playpauseButton= document.getElementById("playpause");
const repeatButton = doument.getElementById("repeat");



const songs= [
{
    image: "aln.png",
    audio: "LovingMachine.mp3",
    name: "Loving Machine",
    artist: "TvGirl"
}
];



function updateSong(){
const song=songs[currentSongIndex];
songName.innerText=song.name;
songArtist.innerText=song.artist;
songImage.src = song.image;

audio.src= song.audio;
}


const audio = document.createElement("audio");
let currentSongIndex =0 ;
updateSong();

playpauseButton.addEventListener("click",function() {
    audio.play();
    updateSong();

});