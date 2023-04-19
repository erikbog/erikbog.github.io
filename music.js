var music = new Audio("Rasmus Gozzi - RID MIG SOM EN DALAHÄST.mp3");
music.loop = true;

$(document).one("click", function () {
  music.play();
});

$(document).ready(function() {
    // add click handler to the music button
    $("#music-button").click(function() {
        if (music.muted) {
            music.muted = false;
            $(this).find("img").attr("src", "music.png");
        } else {
            music.muted = true;
            $(this).find("img").attr("src", "mute.png");
        }
    });
});
