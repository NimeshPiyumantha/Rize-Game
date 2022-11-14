/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
let audio1 = new Audio();
audio1.src = "assets/audio/TitleScreen.mp3";
audio1.play();

(function () {

    if (!audio1.paused) {
        $("div#controller-icons>button#sound-icon").addClass("pressed");
    } else {
        $("div#controller-icons>button#sound-icon").removeClass("pressed");
    }

})();



$("#sound-icon").click(function (e) {
    if (!audio1.paused) {
        audio1.pause();
        $("div#controller-icons>button#sound-icon").removeClass("pressed");
    } else {
        audio1.play();
        $("div#controller-icons>button#sound-icon").addClass("pressed");
    }
});

