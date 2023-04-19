var imageUrls = [
	"https://cdn.discordapp.com/attachments/284695168911671296/1098201239684128778/IMG_20230407_122927.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200073105575936/IMG_20210611_200042.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200072853913712/Snapchat-80256700.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200072593875004/Snapchat-1822866671.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200072329629706/Snapchat-927788833.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200071465599056/Snapchat-1654282653.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200071167811594/Snapchat-1545541308.jpg",
	"https://cdn.discordapp.com/attachments/284695168911671296/1098200070878396466/Snapchat-193500899.jpg",
];

var maxImageWidth = 300;
var maxImageHeight = 300;

function createFallingImage() {
	var imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
	var image = new Image();
	image.onload = function() {
		var aspectRatio = image.width / image.height;
		var imageWidth = Math.min(Math.floor(Math.random() * maxImageWidth) + 150, image.width);
		var imageHeight = Math.min(Math.floor(imageWidth / aspectRatio), maxImageHeight);
		var imageElement = $("<img>")
			.attr("src", imageUrl)
			.css({
				position: "absolute",
				top: "-300px",
				left: Math.random() * ($(window).width() - imageWidth),
				"max-width": imageWidth,
				"max-height": imageHeight
			})
			.appendTo("#falling-images")
			.animate({
				top: $(window).height() + "px",
				left: "+=" + (Math.random() * 100 - 50) + "px"
			}, Math.random() * 10000 + 5000, "linear", function() {
				$(this).remove();
			});
	};
	image.src = imageUrl;
	setTimeout(createFallingImage, Math.random() * 1000);
}

$(document).ready(function() {
	createFallingImage();
});
