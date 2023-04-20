// all files in bungaimg folder should be put in imageUrls array
var imageUrls = [];

for (var i = 2; i <= 39; i++) {
  imageUrls.push("bungaimg/" + i + ".jpg");
}


var maxImageWidth = 300;
var maxImageHeight = 300;

function createFallingImage() {
  var imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  var image = new Image();
  image.onload = function () {
    var aspectRatio = image.width / image.height;
    var imageWidth = Math.min(
      Math.floor(Math.random() * maxImageWidth) + 150,
      image.width
    );
    var imageHeight = Math.min(
      Math.floor(imageWidth / aspectRatio),
      maxImageHeight
    );
    var imageElement = $("<img>")
      .attr("src", imageUrl)
      .css({
        position: "absolute",
        top: "-300px",
        left: Math.random() * ($(window).width() - imageWidth),
        "max-width": imageWidth,
        "max-height": imageHeight,
        cursor: "pointer",
      })
      .appendTo("#falling-images")
      .animate(
        {
          top: $(window).height() + "px",
          left: "+=" + (Math.random() * 100 - 50) + "px",
        },
        Math.random() * 10000 + 5000,
        "linear",
        function () {
          $(this).remove();
        }
      )
      .click(function () {
        var largeImage = $("<img>")
          .attr("src", imageUrl)
          .css({
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "max-width": "80%",
            "max-height": "80%",
            cursor: "pointer",
            "z-index": 9999,
          })
          .appendTo("body")
          .click(function () {
            $(this).remove();
            $("#falling-images").css("opacity", 1.0);
            overlay.remove();
          });
        var overlay = $("<div>")
          .css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            "z-index": 9998,
            cursor: "pointer",
          })
          .appendTo("body")
          .click(function () {
            largeImage.remove();
            $("#falling-images").css("opacity", 1.0);
            $(this).remove();
          });
        $("#falling-images").css("opacity", 0.5);
      });
  };
  image.src = imageUrl;
  setTimeout(createFallingImage, Math.random() * 1000);
}

$(document).ready(function () {
  createFallingImage();
});
