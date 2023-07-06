const tombol = document.querySelector(".btn");
const nonOverlay = document.querySelector(".non-overlay");

const navLinks = document.getElementById("navlinks");

tombol.addEventListener("click", function () {
  nonOverlay.classList.replace("d-none", "d-block");
  navLinks.classList.add("bg-dark");
});

function copied() {
  const copy =
    "Makasih ya, qil.. maaf kalo aku ada kata kata yang bikin kamu ga enak. Aku bakal fokus kesini dulu ya.";
  navigator.clipboard.writeText(copy);

  const copied = document.getElementById("nyalin");
  copied.textContent = "Tersalin";
}
