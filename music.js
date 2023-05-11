var music = new Audio("./music.mp3");
music.loop = true;

var musicTimeout, disclaimerTimeout;

// start playing the music as soon as the user has interacted with the page
function startMusic() {
  music.play();
  music.volume = 0.3;
}
