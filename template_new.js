const postVideo = document.querySelectorAll(".post-video");
const videoPlayer = document.querySelectorAll(".post");

let isPlaying = true;

postVideo.forEach((item, index) => {
  item.loop = true;
  item.autoBuffer = true;
  videoPlayer[index].addEventListener("click", function () {
    isPlaying ? pauseVideo(index) : playVideo(index);
  });
});

function playVideo(index) {
  postVideo[index].play();
  isPlaying = true;
}

function pauseVideo(index) {
  postVideo[index].pause();
  isPlaying = false;
}