const cover = document.querySelector("#cover");
const openButton = document.querySelector("#openInvitation");

openButton.addEventListener("click", () => {
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