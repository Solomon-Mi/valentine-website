// Select elements
const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("music");

// Make the "No" button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// When "Yes" is clicked → go to second page
yesBtn.addEventListener("click", () => {
  music.play();
  window.location.href = "yes.html"; // Redirect to new page
});

// Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
