/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/

let audio1 = new Audio();
audio1.src = "assets/audio/BridgeZone.mp3";
audio1.play();
audio1.loop = true;

let audio2 = new Audio();
audio2.src = "assets/audio/RingCollect.mp3";

let audio3 = new Audio();
audio3.src = "assets/audio/GameOver2.wav";

let audio4 = new Audio();
audio4.src = "assets/audio/GameOver.mp3";

let audio5 = new Audio();
audio5.src = "assets/audio/ActCleared.mp3";


let boy = document.getElementById("boy");
let idleAnimationNumber = 0;
let idleImageNumber = 1;

//Idle Animation
function idleAnimation() {
    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber === 11) {
        idleImageNumber = 1;
    }

    boy.src = "assets/img/png/idle (" + idleImageNumber + ").png";
}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation, 200);
}

