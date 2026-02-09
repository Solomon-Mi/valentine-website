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

// Starting sizes
let noScale = 1;
let yesScale = 1;

// When NO is clicked → shrink NO and grow YES
noBtn.addEventListener("click", () => {
  // Shrink the NO button a bit each click
  noScale -= 0.1;
  if (noScale < 0.2) noScale = 0.2; // Prevent disappearing
  noBtn.style.transform = `scale(${noScale})`;

  // Grow the YES button a bit each click
  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
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

