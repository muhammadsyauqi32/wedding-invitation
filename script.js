const tombol = document.querySelector(".btn");
const nonOverlay = document.querySelector(".non-overlay");

const navLinks = document.getElementById("navlinks");

tombol.addEventListener("click", function () {
  nonOverlay.classList.replace("d-none", "d-block");
  navLinks.classList.remove("transparan");
  navLinks.classList.add("bg-dark");
});

function copied() {
  const copy = "1234567890";
  navigator.clipboard.writeText(copy);

  const copied = document.getElementById("nyalin");
  copied.textContent = "Tersalin";
}
