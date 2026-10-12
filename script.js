const cover = document.querySelector("#cover");
const openButton = document.querySelector("#openInvitation");
const weddingMusic = document.querySelector("#weddingMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicIcon = musicToggle.querySelector(".music-toggle__icon");
const musicLabel = musicToggle.querySelector(".music-toggle__label");

weddingMusic.volume = 0.24;

function updateMusicControl(isPlaying) {
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", `${isPlaying ? "Pause" : "Play"} background music`);
  musicToggle.title = `${isPlaying ? "Pause" : "Play"} background music`;
  musicIcon.textContent = isPlaying ? "♫" : "♪";
  musicLabel.textContent = isPlaying ? "Pause music" : "Play music";
}

async function playWeddingMusic() {
  try {
    await weddingMusic.play();
    updateMusicControl(true);
  } catch {
    updateMusicControl(false);
  }
}

musicToggle.addEventListener("click", () => {
  if (weddingMusic.paused) {
    playWeddingMusic();
  } else {
    weddingMusic.pause();
    updateMusicControl(false);
  }
});

openButton.addEventListener("click", () => {
  playWeddingMusic();
  cover.classList.add("is-open");
  window.setTimeout(() => cover.remove(), 1300);
});

const weddingDate = new Date("2026-10-25T06:00:00+05:30").getTime();
const countdownUnits = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]'),
};

function updateCountdown() {
  const remaining = Math.max(0, weddingDate - Date.now());
  const seconds = Math.floor(remaining / 1000);
  countdownUnits.days.textContent = String(Math.floor(seconds / 86400)).padStart(2, "0");
  countdownUnits.hours.textContent = String(Math.floor((seconds % 86400) / 3600)).padStart(2, "0");
  countdownUnits.minutes.textContent = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  countdownUnits.seconds.textContent = String(seconds % 60).padStart(2, "0");
}

updateCountdown();
window.setInterval(updateCountdown, 1000);