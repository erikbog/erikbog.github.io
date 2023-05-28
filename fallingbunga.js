// all files in bungaimg folder should be put in imageUrls array
var imageUrls = [];

var maxImageWidth = 300;
var maxImageHeight = 300;

// Add video thumbnails to the imageUrls array
var videoThumbnails = [
  "Snapchat-628446483.jpg",
  "Snapchat-1193473022.jpg",
  "Snapchat-1315624666.jpg",
  "Snapchat-1426759521.jpg",
  "Snapchat-1870895666.jpg",
  "Snapchat-2074205843.jpg",
  "VID_20211227_211605.jpg",
  "Snapchat-546945270.jpg",
  "Snapchat-42485206.jpg",
  "Snapchat-1036915896.jpg"
];

// New helper function to check if the file name is a video thumbnail
function isVideoThumbnail(fileName) {
  return videoThumbnails.includes(fileName);
}

// New helper function to convert a thumbnail file name to its corresponding video file name
function getVideoFileName(imageFileName) {
  return imageFileName.replace(".jpg", ".mp4");
}

function createFallingImage() {
  fetch(
    "https://api.github.com/repos/erikbog/erikbog.github.io/contents/bungaimg?ref=main"
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((file) => {
        imageUrls.push(file.download_url);
      });
      var imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      var imageName = imageUrl.split("/").pop();
      var isVideo = isVideoThumbnail(imageName);
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

        mediaElement = $("<img>")
          .attr("src", imageUrl)
          .css({
            position: "absolute",
            top: "-300px",
            left: Math.random() * ($(window).width() - imageWidth),
            "max-width": imageWidth,
            "max-height": imageHeight,
            cursor: "pointer",
          });

          mediaElement
          .appendTo("#falling-images")
          .animate(
            {
              top: $(window).height() + 300 + "px", // Increased the value here
              left: "+=" + (Math.random() * 100 - 50) + "px",
            },
            Math.random() * 10000 + 5000,
            "linear",
            function () {
              $(this).remove();
            }
          )
          .click(function () {
            var largeMedia;
            if (isVideo) {
              var videoFileName = getVideoFileName(imageName);
              largeMedia = $("<video>")
                .attr("src", "bungavid/" + videoFileName)
                .attr("autoplay", true)
                .attr("loop", true)
                .prop("controls", false)
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
            } else {
              largeMedia = $("<img>")
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
            }
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
                largeMedia.remove();
                $("#falling-images").css("opacity", 1.0);
                $(this).remove();
              });
            $("#falling-images").css("opacity", 0.5);
          });
        };
  
        image.src = imageUrl;
        setTimeout(createFallingImage, Math.random() * 1000);
      });
  }
  
  $(document).ready(function () {
    createFallingImage();
  });