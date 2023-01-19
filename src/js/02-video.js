import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const VIDEO_CURRENT_TIME = "videoplayer-current-time";

const video = document.getElementById('vimeo-player');
console.log(video);
            
const player = new Player(video);

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle (onPlay,1000));
function onPlay(e) {
        localStorage.setItem(VIDEO_CURRENT_TIME,e.seconds);
    
};
const currentTime = localStorage.getItem(VIDEO_CURRENT_TIME)

if(currentTime){
    player.setCurrentTime (currentTime);
} 
