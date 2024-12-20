let player;
const videoIds = [
    'dQw4w9WgXcQ', // Rick Astley - Never Gonna Give You Up
    '3JZ_D3ELwOQ', // TheFatRat - Unity
    '2Vv-BfVoq4g', // Ed Sheeran - Perfect
    'hT_nvWreIhg', // OneRepublic - Counting Stars
    'ktvTqknDobU'  // Imagine Dragons - Radioactive
];

// Load the YouTube IFrame API and initialize the player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: '', // No video initially loaded
        playerVars: {
            'autoplay': 1,
            'controls': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log("YouTube Player is ready.");
}

// Function to play a random YouTube video
function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    const randomVideoId = videoIds[randomIndex];
    player.loadVideoById(randomVideoId);
    document.getElementById('player').style.display = 'block';
}

// Event listener for the button
document.getElementById('playMusicBtn').addEventListener('click', playRandomMusic);
