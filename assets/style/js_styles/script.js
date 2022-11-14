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

//Run Animation
let runImageNumber = 1;
let runAnimationNumber = 0;

function runAnimation() {
    runImageNumber = runImageNumber + 1;
    if (runImageNumber === 9) {
        runImageNumber = 1;
    }

    boy.src = "assets/img/png/run (" + runImageNumber + ").png";
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);
}

function keyCheck(event) {
    let keyCode = event.which;

    if (keyCode === 13) {
        if (runAnimationNumber === 0) {
            runAnimationStart();
        }
        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (boxAnimationId === 0) {
            boxAnimationId = setInterval(boxAnimation, 100);
        }
    }

    if (keyCode === 32) {
        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }
    }
    if (moveBackgroundAnimationId === 0) {
        moveBackgroundAnimationId = setInterval(moveBackground, 100)
    }
    if (boxAnimationId === 0) {
        boxAnimationId = setInterval(boxAnimation, 100);
    }
}

let backgroundImagePositionX = 0;
let moveBackgroundAnimationId = 0;

let score = 0;

function moveBackground() {
    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

    score = score + 1;
    document.getElementById("score").innerHTML = score;
        if(score===500){
            winResults();
        }
}

//jump Animation
let jumpAnimationNumber = 0;
let jumpImageNumber = 1;
let boyMarginTop = 510;

function jumpAnimation() {
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6) {
        boyMarginTop = boyMarginTop - 35;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber >= 7) {
        boyMarginTop = boyMarginTop + 35;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber === 11) {
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

    boy.src = "assets/img/png/jump (" + jumpImageNumber + ").png";
}

function jumpAnimationStart() {
    clearInterval(idleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation, 100);
}

//boxes
let boxMarginLeft = 2040;

function createBoxes() {
    for (let i = 0; i <= 10; i++) {
        let box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id = "box" + i;

        if (i < 5) {
            boxMarginLeft = boxMarginLeft + 2200;
        }
        if (i >= 5) {
            boxMarginLeft = boxMarginLeft + 1200;
        }
    }
}

let boxAnimationId = 0;

function boxAnimation() {
    for (let i = 0; i < 10; i++) {
        let box = document.getElementById("box" + i);
        let currentMarginLeft = getComputedStyle(box).marginLeft;
        let newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMarginTop > 500) {
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(boyDeadAnimation, 100);

            }
        }
    }
}

//dead
let deadAnimationNumber = 0;
let deadImageNumber = 1;

function boyDeadAnimation() {
    deadImageNumber = deadImageNumber + 1;

    if (deadImageNumber === 11) {
        deadImageNumber = 10;
    }

    boy.src = "assets/img/png/Dead (" + deadImageNumber + ").png";
    game_over();
}
