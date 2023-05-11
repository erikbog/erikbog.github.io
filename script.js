// Define the music button click handler
$("#music-button").click(function() {
  music.muted = !music.muted;
  const imgSrc = music.muted ? "mute.png" : "music.png";
  $(this).find("img").attr("src", imgSrc);
});

// Define the function to hide the music and disclaimer elements after inactivity
const hideElements = function() {
  $("#music-button").fadeOut();
  $("body").css("cursor", "none");
  if (!$("#disclaimer:hover").length) $("#disclaimer").fadeOut();
};

// Define the function to reset the timeout and show the music and disclaimer elements
const resetTimeout = function() {
  clearTimeout(timeout);
  $("#music-button, #disclaimer").fadeIn();
  $("body").css("cursor", "auto");
  timeout = setTimeout(hideElements, 3000);
};

// Initialize the timeout for hiding the music and disclaimer elements
let timeout = setTimeout(hideElements, 3000);

// Add event listeners for resetting the timeout on mouse and touch interactions
$(document).on("mousemove touchstart", function() {
  resetTimeout();
});

$("#music-controls").hover(
  function () {
    $("#volume-slider").fadeIn();
  },
  function () {
    $("#volume-slider").fadeOut();
  }
);

$("#volume-slider").on("input", function () {
  const volume = $(this).val();
  music.volume = volume;
});

$("#playDiv").click(function () {
  startMusic();
  $(this).hide();
}
);
