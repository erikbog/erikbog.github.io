var music = new Audio("./music.mp3");
music.loop = true;

document.addEventListener("DOMContentLoaded", function() {
  // start playing the music as soon as the user has interacted with the page
  document.addEventListener("click", function() {
    music.play();
    // change the volume to 0.3
    music.volume = 0.3;
  }, { once: true });

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
