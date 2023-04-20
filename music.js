var music = new Audio("./music.mp3");
music.loop = true;

$(document).one("click", function () {
  music.play();
  //   change the volume to 0.1
  music.volume = 0.3;
});

$(document).ready(function () {
  // add click handler to the music button
  $("#music-button").click(function () {
    if (music.muted) {
      music.muted = false;
      $(this).find("img").attr("src", "music.png");
    } else {
      music.muted = true;
      $(this).find("img").attr("src", "mute.png");
    }
  });
});
