const photos = [
    "https://i.imgur.com/4nxbvEh.jpg",
    "https://i.imgur.com/g7Cs0dv.jpg",
    "https://i.imgur.com/Sk48EPH.jpg",
    "https://i.imgur.com/wl3C5yC.jpg"
];

const lyrics = [
    "Like OOH-AHH~ 🎶",
    "Shy shy shy! 🎶",
    "Cheer up baby~ 🎵",
    "TT~ Just like TT~ 😭",
    "Knock knock knock on my door~ 🚪",
    "Signal 보내 Signal~ 🚀",
    "Likey likey likey likey du ru du ru~ 💖",
    "What is Love?~ 🎶",
    "Yes or Yes?~ 💕",
    "Fancy~ You~ 🌆",
    "Feel Special, I'm so special~ 🎶",
    "More & More, I want you~ 💕",
    "I can't stop me, can't stop me~ 💖",
    "Alcohol-free but I get drunk~ 🍇",
    "Talk that Talk~ 💬",
    "Set me free~ 🔥"
];

function showPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photoElement = document.getElementById("photo");
    photoElement.src = photos[randomIndex];
    photoElement.style.display = "block";
}

function showLyrics() {
    const randomIndex = Math.floor(Math.random() * lyrics.length);
    const lyricsElement = document.getElementById("lyrics");
    lyricsElement.textContent = lyrics[randomIndex];
    lyricsElement.style.display = "block";
}

function showVideo() {
    const videoElement = document.getElementById("video");
    videoElement.style.display = "block";
    videoElement.play();
}
