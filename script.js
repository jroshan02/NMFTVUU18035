// Example: Add dynamic star particles
document.addEventListener("DOMContentLoaded", () => {
  const numStars = 20;
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.classList.add("particle");
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (8 + Math.random() * 12) + "s";
    document.body.appendChild(star);
  }
});