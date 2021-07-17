var tag = document.createElement('script');
tag.src = "img\pexels-vlada-karpovich-7351802.mp4";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '360',
  width: '640',
  videoId: '2fqwIPhAY1Q',
  host: 'http://www.youtube-nocookie.com',//privacy mode
  playerVars: { 'controls': 0, //hide controls
               'autohide': 1,
               'modestbranding': 1, //hide brand
               'showinfo': 0, //hide video info
               'mute' : 1 //video is muted
              },
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
}
function onPlayerReady(event) {
  goToStart(event);
}
function onPlayerStateChange(event) {
  var tm = player.getCurrentTime();
  if (event.data == YT.PlayerState.ENDED) {
    goToStart(event);
  }
}
function goToStart(event) {
  event.target.seekTo(0,1);
  player.playVideo();
}