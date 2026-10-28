document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter");
  const intro = document.querySelector(".intro");
  const main = document.querySelector("main");
  const nameSpan = document.getElementById("name");
  const music = document.getElementById("music");

  // ENTER BUTTON
  enterBtn.addEventListener("click", () => {
    const name = prompt("Who is this for?");
    if (name && name.trim() !== "") nameSpan.textContent = name;

    intro.style.display = "none";
    main.classList.remove("hidden");

    if (music) music.play().catch(() => console.log("Audio autoplay blocked"));
  });

  // SCROLL REVEAL FOR LETTER
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // HEART CLICK SECRET
  const heart = document.getElementById("heart");
  const secret = document.getElementById("secret");

  heart.addEventListener("click", () => {
    secret.classList.remove("hidden");
  });
});
