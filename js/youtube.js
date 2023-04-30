let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoList = [
  "WRLbXAWf60o",
  "uKfvqBrPDwI",
  "raVw_10-RB8",
  "ck8CBmeLjVQ",
  "Nzu98XJ55Hg",
  "_w2M5KmXfvE",
  "03OrtAv9nBc",
  "PjjBCKzD9LE",
];
const video = videoList[Math.floor(Math.random() * videoList.length)];

function onYouTubePlayerAPIReady() {
  new YT.Player("player", {
    height: "100%",
    width: "32%",
    videoId: video,
    playerVars: {
      autoplay: false,
      loop: false,
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}

const searchFrm = document.querySelector(".search__bar");
function searching() {
  const search = document.querySelector(".search__bar-txt");
  const keyword = search.value;
  const URL = `https://www.google.co.kr/search?where=nexteach&query=${keyword}`;
  window.open(URL);
}
searchFrm.addEventListener("submit", searching);
