var music = new Audio("./music.mp3");
music.loop = true;

var musicTimeout, disclaimerTimeout;


document.addEventListener("DOMContentLoaded", function() {
  // start playing the music as soon as the user has interacted with the page
  document.addEventListener("click", function() {
    music.play();
    // change the volume to 0.3
    music.volume = 0.3;
  }, { once: true });
});